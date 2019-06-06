// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - EPS2PSD.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: exports a psd file
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var docName = app.activeDocument.name.split('.')[0];
exportFileToPSD("/Users/graphics2/Desktop/PSDS/" + docName );
//Exports current document to dest as a PSD file with specified
//options, dest contains the full path including the file name
function exportFileToPSD (dest) {
    if (app.documents.length>0) {
        var exportOptions = new ExportOptionsPhotoshop ();
        var type = ExportType.PHOTOSHOP;
        var fileSpec = new File (dest);
        exportOptions.resolution = 300; 
        exportOptions.maximumEditability = true; 
        exportOptions.editableText = true;
        exportOptions.antiAliasing = true;
        exportOptions.artboardRange = true;
        exportOptions.saveMultipleArtboards = false;
        exportOptions.imageColorSpace = ImageColorSpace.RGB;
        app.activeDocument.exportFile (fileSpec, type, exportOptions);
        }
    }