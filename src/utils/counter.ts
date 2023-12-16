import * as vscode from "vscode";

let counter = vscode.workspace.onDidChangeTextDocument((e) => {
  console.log(e.document.getText());
});

export default counter;
