import * as vscode from "vscode";
import startListening from "./commands/startListening";
import stopListening from "./commands/stopListening";
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(startListening);
  context.subscriptions.push(stopListening);
}

export function deactivate() {}
