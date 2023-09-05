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
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
		return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
			let funcItems: vscode.CompletionItem[] = [];
			resolve(this.functions.concat(funcItems));
			reject(null);
		});
	}
}
