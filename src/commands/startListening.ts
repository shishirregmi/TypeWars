import * as vscode from "vscode";

let startListening = vscode.commands.registerCommand(
  "typewars.startListening",
  () => {
    vscode.window.showInformationMessage("TypeWars is now listening!");

    vscode.workspace
      .getConfiguration("TypeWars")
      .update("listenKeys", true, true);
    vscode.workspace.onDidChangeTextDocument((e) => {
      let count: number = vscode.workspace
        .getConfiguration("TypeWars")
        .get("listenCount") as number;
      let xp: number = vscode.workspace
        .getConfiguration("TypeWars")
        .get("playerXp") as number;

      if ((count + 1) % 60 === 0) {
        vscode.workspace
          .getConfiguration("TypeWars")
          .update("listenCount", 0);
          vscode.workspace
          .getConfiguration("TypeWars")
          .update("playerXp", xp + 1);
      } else {
        vscode.workspace.getConfiguration("TypeWars").update("listenCount", count + 1);
      }

      let new_count: number = vscode.workspace
        .getConfiguration("TypeWars")
        .get("listenCount") as number;
      let new_xp: number = vscode.workspace
        .getConfiguration("TypeWars")
        .get("playerXp") as number;

      console.log({
        new_count: new_count,
        new_xp: new_xp,
      });
    });
  }
);

export default startListening;
