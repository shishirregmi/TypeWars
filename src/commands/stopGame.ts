import * as vscode from 'vscode';

let stopGame = vscode.commands.registerCommand('typewars.stopGame', () => {
    vscode.window.showInformationMessage('Stopping the game...');
});

export default stopGame;
