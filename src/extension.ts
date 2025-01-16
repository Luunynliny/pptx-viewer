import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('PPTX extension is now active!');

  // Register the command for the editor toolbar button
  const openVirtualDocCommand = vscode.commands.registerCommand('pptx.openVirtual', async (uri?: vscode.Uri) => {
    // Use the URI passed by the button if available, otherwise use the active editor
    let fileUri = uri || vscode.window.activeTextEditor?.document.uri;

    if (!fileUri || !fileUri.fsPath.endsWith('.pptx')) {
      vscode.window.showErrorMessage('This command only works for .pptx files.');
      return;
    }

    // Show a notification for now (or trigger your virtual document logic here)
    vscode.window.showInformationMessage(`Virtual document triggered for: ${fileUri.fsPath}`);
  });

  context.subscriptions.push(openVirtualDocCommand);
}
