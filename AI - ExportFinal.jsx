// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - ExportFinal.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script Exports the file with the most comonly used settings
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


app.activeDocument.executeMenuCommand('Check Spelling');

//Save LAR
var docName = app.activeDocument.name.split('.')[0];


const FILE_SUFFIX = "-export";
const ASSET_SUFFIX = "-assets";
var doc = app.activeDocument;
if (!doc.saved) doc.save();
var original_file = doc.fullName;

// collect all linked files
var export_folder = "G:/Team Drives/Graphics Team Drive/_Assets/";
var arr = doc.name.split(".");
var extension = "";
if (arr.length>1) extension = "." + arr.pop();
var filename = arr.join(".");
var assets_folder = new Folder(export_folder + "/" + filename + ASSET_SUFFIX);
if (assets_folder.exists || assets_folder.create()) {
     var i, in_file, out_file;
     for (i=0;i<doc.placedItems.length;i++) {
          in_file = doc.placedItems[i].file;
          out_file = File(assets_folder+"/"+in_file.name);
          in_file.copy(out_file);
          doc.placedItems[i].file = out_file;
     }
     for (i=0;i<doc.rasterItems.length;i++) {
          if (doc.rasterItems[i].embedded) continue;
          in_file = doc.rasterItems[i].file;
          out_file = File(assets_folder+"/"+in_file.name);
          in_file.copy(out_file);
          doc.rasterItems[i].file = out_file;
     }
}



exportFileToJPEG("G:/Team Drives/LAR/Promotions/" + docName);
// Exports current document to dest as a JPEG file with specified
// options, dest contains the full path including the file name
function exportFileToJPEG (dest) {
    if ( app.documents.length > 0 ) {
        var exportOptions = new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        // var fileSpec = new File(dest);
        exportOptions.artBoardClipping = true; // If true, the exported image should be clipped to the artboard.
        exportOptions.antiAliasing = true;
        exportOptions.optimization = true;
        exportOptions.qualitySetting = 100;



        // Gets the length (amount) of artboards in the current document.
        var artboard_length = app.activeDocument.artboards.length;
        // Loop that runs the code as many times as there are artboards...
        for (var i = 0; i < artboard_length; i++ ) {
            // Set the active artboard based on the loop number
            app.activeDocument.artboards.setActiveArtboardIndex(i);
            var artboardName = app.activeDocument.artboards[i].name
            // Exports the current artboard as a jpeg file
            app.activeDocument.exportFile( new File( dest + "-" + artboardName + ".jpg" ), type, exportOptions );
        }

    }
}
//save pdf
 var saveName = app.activeDocument.name.split('.')[0];
saveFileToPDF("G:/Team Drives/Graphics Team Drive/_pdf/" + saveName  );
 function saveFileToPDF (dest){
     var doc = app.activeDocument;
     if (app.documents.length >0) {
         var saveName = new File (dest) ;
         saveOpts = new PDFSaveOptions ();
         saveOpts.compatibility = PDFCompatibility.ACROBAT5;
         saveOpts.generateThumbnails = true;
         saveOpts.preserveEditability = true;
         
         doc.saveAs (saveName, saveOpts);
         }
     }
 //Save
app.executeMenuCommand('save');
app.executeMenuCommand('close');