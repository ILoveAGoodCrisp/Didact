import * as vscode from 'vscode';
import {hsFunctions} from '../definitions/functions'

export class hsProvider implements vscode.HoverProvider {
    public provideHover(document: vscode.TextDocument,
                        position: vscode.Position,
                        token: vscode.CancellationToken)
    {
        let wordRange = document.getWordRangeAtPosition(position);
        let hoverText = document.getText(wordRange);
        const foundFunc = hsFunctions.find((def) => def.name === hoverText);
        if(foundFunc == null) {
            return Promise.resolve(null);
        }
        const joinedArgs = foundFunc.args.join(', ');
        let detail = foundFunc.name + "(" + joinedArgs + ")" + " -> " + foundFunc.r_type;;
        let documentation = foundFunc?.desc;
        let command = `${detail}\n\n${documentation}`;

        return new vscode.Hover({
            language: "plaintext",
            value: command
        });
    }
}