import * as vscode from 'vscode';

let stopListening = vscode.commands.registerCommand('typewars.stopListening', () => {
    vscode.window.showInformationMessage('Typewars has now stopped listening.');
    vscode.workspace.getConfiguration("TypeWars").update("listenKeys", false, true);
});

export default stopListening;