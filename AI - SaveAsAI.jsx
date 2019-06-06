// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SaveAsAI.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script saves the file as an AI in a predefined location
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// This script exports a package of the currently active document.
// Choose output folder, and indicate whether or not you want to 
// outline text elements.


var doc = app.activeDocument;
if (!doc.saved) doc.save();
var original_file = doc.fullName;

 var export_folder = Folder("N:\ADAM");   
 var arr = doc.name.split(".");
 var extension = "";
 var filename = arr.join(".");
 
     // save as new Illustrator file
     packaged_file = File(export_folder + "/" + filename + extension);
     doc.saveAs(packaged_file, this.getAIOptions() );
     
     // close the document and re-open the original file
     doc.close();
     app.open(File(original_file));
     

function getAIOptions() {
     var options = new IllustratorSaveOptions();
     options.embedICCProfile = true;
     options.pdfCompatible = false;
     return options;
}
     


function changeExtension(filename, new_ext) {
    var new_name = "";
     if (filename.indexOf('.') < 0) {
          new_name = filename + new_ext;
     } else {
          var dot = filename.lastIndexOf('.');
          new_name += filename.substring(0, dot);
          new_name += new_ext;
     }
    return new_name;
}

