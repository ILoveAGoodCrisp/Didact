import * as vscode from 'vscode';
import {hsFunctions} from '../definitions/functions'
import {hsKeywords} from '../definitions/keywords'

export class hsProvider implements vscode.HoverProvider {
    public provideHover(document: vscode.TextDocument,
                        position: vscode.Position,
                        token: vscode.CancellationToken)
    {
        let wordRange = document.getWordRangeAtPosition(position);
        let hoverText = document.getText(wordRange);
        const foundFunc = hsFunctions.find((def) => def.name === hoverText);
        const foundKeyword = hsKeywords.find((def) => def.name === hoverText);
        let detail = ""
        let documentation = ""
        let command = ""
        if (foundKeyword != null)
        {
            if (foundKeyword.name == 'begin_count' || foundKeyword.name == 'begin_random_count')
			{
                detail = foundKeyword.name + "(long) -> passthrough";;
			}
			else
			{
				detail = foundKeyword.name + " -> passthrough";
			}
            documentation = foundKeyword?.desc;
        }
        else if (foundFunc != null)
        {
            const joinedArgs = foundFunc.args.join(', ');
            detail = foundFunc.name + "(" + joinedArgs + ")" + " -> " + foundFunc.r_type;;
            documentation = foundFunc?.desc;
        }
        else
        {
            return Promise.resolve(null);
        }

        command = `${detail}\n\n${documentation}`;

        return new vscode.Hover({
            language: "plaintext",
            value: command
        });
    }
}