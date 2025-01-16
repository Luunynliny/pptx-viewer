import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('PPTX extension is now active!');

  // Register the command for the editor toolbar button
  const openVirtualDocCommand = vscode.commands.registerCommand('pptx.openVirtual', async () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      vscode.window.showErrorMessage('No active editor detected.');
      return;
    }

    const fileName = activeEditor.document.fileName;
    if (!fileName.endsWith('.pptx')) {
      vscode.window.showErrorMessage('This command only works for .pptx files.');
      return;
    }

    vscode.window.showInformationMessage(`Virtual document triggered for: ${fileName}`);
  });

  context.subscriptions.push(openVirtualDocCommand);
}

export function deactivate() {
  console.log('PPTX extension has been deactivated.');
}
