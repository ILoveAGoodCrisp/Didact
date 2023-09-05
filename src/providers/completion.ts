import * as vscode from 'vscode';

import {hsFunctions} from '../definitions/functions'

// Provides function completion
export class hsProvider {
	functions: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.functions = new Array<vscode.CompletionItem>();

		for (var i in hsFunctions) {
			var func = hsFunctions[i];

			var item = new vscode.CompletionItem(func.name);
			const joinedArgs = func.args.join(', ');
			item.detail = func.name + "(" + joinedArgs + ")" + " -> " + func.r_type;
			item.documentation = func.desc;
			item.insertText = new vscode.SnippetString(func.name + '(${1})');
			item.kind = vscode.CompletionItemKind.Function;
			this.functions.push(item);
		}
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
		): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
			return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
				// Get the text of the current line
				const currentLine = vscode.window.activeTextEditor?.document.lineAt(position.line).text.trim();
		
				// Check if the line starts with "script," "global," or "local" (case insensitive)
				if (
					currentLine &&
					/^(script|global|local)\b/i.test(currentLine)
				) {
					// If the line starts with any of these keywords, return an empty array
					resolve([]);
				} else {
					// Otherwise, provide completion items as usual
					let funcItems: vscode.CompletionItem[] = [];
					resolve(this.functions.concat(funcItems));
				}
			});
		}
	}		
