import * as ts from "typescript";
import {AddChangeCallback} from './language_service_reactor';

export function updateVars(fileNames: string[], services: ts.LanguageService, addChange: AddChangeCallback) {
  
  const program = services.getProgram();
  const checker = program.getTypeChecker();

  for (const sourceFile of program.getSourceFiles()) {
    if (fileNames.indexOf(sourceFile.fileName) >= 0) {
      ts.forEachChild(sourceFile, visit);

      function visit(node: ts.Node) {
        if (node.kind == ts.SyntaxKind.VariableDeclarationList) {
          const varDecls = <ts.VariableDeclarationList>node;
          const text = varDecls.getFullText();
          if (text.trim().startsWith('var')) {
            addChange(sourceFile.fileName, {
              span: {
                start: varDecls.getStart(),
                length: 'var'.length
              },
              newText: 'let'
            });
          }
          // console.log(`FOUND DECLS: ${varDecls.getFullText()}`);
        }
        ts.forEachChild(node, visit);
      }
    }
  }
}
