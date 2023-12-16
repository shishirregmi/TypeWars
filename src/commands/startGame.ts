import * as vscode from 'vscode';

let startGame = vscode.commands.registerCommand('typewars.startGame', () => {
    vscode.window.showInformationMessage('Loading game...');
});

export default startGame;
