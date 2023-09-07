'use strict';
import {ExtensionContext, commands, languages} from 'vscode';
import * as completion from './providers/completion'
import * as hover from './providers/hover'
import * as signature from './providers/signature'
import {runToolExecutable} from './commands/scriptCompiler'
// import * as signature from './providers/signatures'

export function activate(context: ExtensionContext) {
	console.log("Didact: Start");
	let sighelp = new signature.hsProvider();
	context.subscriptions.push(languages.registerCompletionItemProvider("hsc" , new completion.hsProvider(context.extensionPath)));
	context.subscriptions.push(languages.registerHoverProvider("hsc", new hover.hsProvider()));
	context.subscriptions.push(languages.registerSignatureHelpProvider('hsc', sighelp, '(', ',', ' ',));

	const command = 'didact.compileScenarioScripts';
	const commandHandler = (name: string = 'world') => {
		runToolExecutable();
	};
	context.subscriptions.push(commands.registerCommand(command, commandHandler));
}

export function deactivate() {
	console.log("Didact: End");
}