import * as vscode from 'vscode';
import {hsFunctions, HSFunction} from '../definitions/functions'
import {hsKeywords} from '../definitions/keywords'
import {hsScriptTypes} from '../definitions/scriptTypes'
import {hsReturnTypes} from '../definitions/returnTypes'

type TokenList = Array<[number, number]>;

function getSignatureInformation(hsFunction: HSFunction): vscode.SignatureInformation {
    const signature = new vscode.SignatureInformation("", "");
    signature.parameters = hsFunction.args.map(arg => new vscode.ParameterInformation(arg));
    signature.documentation = hsFunction.desc;
    const joinedArgs = hsFunction.args.join(', ');
    signature.label = hsFunction.name + "(" + joinedArgs + ")" + " -> " + hsFunction.r_type;

    return signature;
}

export class hsProvider implements vscode.SignatureHelpProvider{
    public provideSignatureHelp(document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken): vscode.ProviderResult<vscode.SignatureHelp>
        {
            const currentLine = document.lineAt(position.line).text.substring(0, position.character);
            const tokens = this.findTokens(currentLine);
            console.log(tokens[0])
            console.log(tokens[1])
            const cmdTokenIndex = this.findCommandName(currentLine, tokens);
            if(cmdTokenIndex == null) {
                return Promise.resolve(null);
            }

            const cmdToken = tokens[cmdTokenIndex];
            const command = currentLine.slice(cmdToken[0], cmdToken[1]);
            const foundFunc = hsFunctions.find((def) => def.name === command);
            if(foundFunc == null) {
                return Promise.resolve(null);
            }

            const openParenIndex = currentLine.lastIndexOf('(', position.character);

            // Check if there's an open parenthesis before the cursor
            if (openParenIndex === -1) {
                return null; // Cursor is outside of a function call
            }
        
            const closeParenIndex = currentLine.indexOf(')', openParenIndex);
        
            // Check if there's a closing parenthesis after the open parenthesis
            if (closeParenIndex !== -1) {
                return null; // Cursor is inside an incomplete function call
            }

            let currentToken : number;
            for(currentToken = 0; currentToken < tokens.length; ++currentToken) {
                let [tokenBegin, tokenEnd] = tokens[currentToken];
                if(position.character >= tokenBegin) {
                    if(position.character <= tokenEnd)
                        break;
                } else {
                    // the cursor is before this token and any other token following it.
                    --currentToken;
                    break;
                }
            }

            // Clamp the value of currentToken within [0, tokens.length] (inclusive).
            currentToken = Math.min(currentToken, tokens.length);
            currentToken = Math.max(0, currentToken);

            // The cursor is way before the command token.
            if(currentToken < cmdTokenIndex) {
                return Promise.resolve(null);
            }


            let activeArgumentId = (currentToken - cmdTokenIndex) - 1; // will become -1 if typing command
            let activeArgument = null;
    
            if(foundFunc.args.length == 0 || activeArgumentId < 0) {
                activeArgument = null;
            } else if(activeArgumentId < foundFunc.args.length) {
                activeArgument = foundFunc.args[activeArgumentId];
            } else {
                activeArgument = foundFunc.args[foundFunc.args.length - 1];
            }

            const signatureHelp = new vscode.SignatureHelp();
            
            signatureHelp.activeSignature = 0; // Index of the active signature
            signatureHelp.activeParameter = activeArgumentId; // Index of the active parameter
            
            const signature = getSignatureInformation(foundFunc);
            console.log(signature)

            // Add the signature to the SignatureHelp
            signatureHelp.signatures.push(signature);
            
            return signatureHelp;
            
        }

    private findTokens(line: string): TokenList {
        let tokens = new Array<[number, number]>();
        let nextTokenPos = 0;
        let insideQuotes = false;
        for(let i = 0; i < line.length; ++i) {
            switch(line[i]) {
                case ' ':
                case '\t':
                case ',':
                case '(':
                case ')':
                    if(!insideQuotes) {
                        if(i > nextTokenPos) { // whitespaces followed by whitespaces
                            tokens.push([nextTokenPos, i]);
                        }
                        nextTokenPos = i+1;
                    }
                    break;
                case '"':
                    insideQuotes = !insideQuotes;
                    break;
            }
        }
        if(nextTokenPos != line.length) {
            tokens.push([nextTokenPos, line.length]);
        }
        return tokens;
    }

    private findCommandName(line: string, tokens: TokenList): number | null {

        let i = 0;
        let lastFetchedTokenIndex = -1;
        let lastFetchedTokenValue = "";

        let getTokenValue = (index: number): string => {
            if(tokens.length <= index)
                return "";

            if(lastFetchedTokenIndex == index)
                return lastFetchedTokenValue;

            let token = tokens[index];
            lastFetchedTokenIndex = index;
            lastFetchedTokenValue = line.slice(token[0], token[1]).toUpperCase();
            return lastFetchedTokenValue;
        };

        let value = getTokenValue(i);
        
        return tokens.length <= i? null : i;
    }
}