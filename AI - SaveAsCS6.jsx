//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SaveAsCS6.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description:  This script Saves a CS6 version of the file with a prefix label "CS6_" 
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Saves the current document to dest as an AI file with specified options,
//dest specifies the full path and file name of the new file
var docName = app.activeDocument.name.split('.')[0];
var filepath = app.activeDocument.path;
exportFileToAI(filepath +"/CS6/"  + "CS6_" + docName );
function exportFileToAI (dest) {
    if (app.documents.length>0){
        var saveOptions = new IllustratorSaveOptions ();
        var ai16Doc = new File (dest);
        saveOptions.compatibility = Compatibility.ILLUSTRATOR16;
        saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;
        app.activeDocument.saveAs (ai16Doc, saveOptions);
        }
    }

executeMenuCommand('close');