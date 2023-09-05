'use strict';
import {ExtensionContext, languages} from 'vscode';
import * as completion from './providers/completion'
import * as hover from './providers/hover'
// import * as signature from './providers/signatures'

export function activate(context: ExtensionContext) {
	console.log("Didact: Start");
	context.subscriptions.push(languages.registerCompletionItemProvider("hsc" , new completion.hsProvider(context.extensionPath)));
	context.subscriptions.push(languages.registerHoverProvider("hsc", new hover.hsProvider()));
}

export function deactivate() {
	console.log("Didact: End");
}