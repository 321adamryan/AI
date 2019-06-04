// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - PackagePlusV1.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script packages all needed files for relocation
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//////////////NOTES//////////////
//-ADD FONTS TO ASSETS 
//-ADD FONT INFO TYPES
//
//////////////END//////////////

const FILE_SUFFIX = "-export";
const ASSET_SUFFIX = "-assets";
var doc = app.activeDocument;
if (!doc.saved) doc.save();
var original_file = doc.fullName;

// collect all linked files
var export_folder = Folder.selectDialog("Choose a folder to package into.");
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
     
     // save as new Illustrator file
     packaged_file = File(export_folder + "/" + filename + FILE_SUFFIX + extension);
     doc.saveAs(packaged_file, this.getAIOptions() );
     
     // PDF export
    var pdf_target_file = File(export_folder + "/" + this.changeExtension(doc.name, ".pdf"));
    doc.saveAs( pdf_target_file, this.getPDFOptions() );
    
     // EPS export
     var eps_target_file = File(export_folder + "/" + this.changeExtension(doc.name, ".eps"));
     doc.saveAs( eps_target_file, this.getEPSOptions() );
          
} else {
     alert("Unable to create the assets folder.");
}

function getAIOptions() {
     var options = new IllustratorSaveOptions();
     options.embedICCProfile = true;
     options.pdfCompatible = false;
     return options;
}
     
function getEPSOptions() {
     var options = new EPSSaveOptions();
     options.cmykPostScript = true;
     options.embedAllFonts = true;
     return options;
}

function getPDFOptions() {
     var options = new PDFSaveOptions();
    options.pDFPreset = "[Smallest File Size]";
     
    options.compatibility = PDFCompatibility.ACROBAT7;
    // general
    options.preserveEditability = false;
    options.generateThumbnails = false;
    options.optimization = true;
    options.viewAfterSaving = false;
    options.acrobatLayers = false;
    // compression
    options.compressArt = true;
    options.colorCompression = CompressionQuality.AUTOMATICJPEGMEDIUM;
    
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
#target illustrator

var inputFolder = Folder(export_folder);
var Loginfo = new File(inputFolder + "/" + filename + "-FontInfo.txt");
Loginfo.open("w", "TEXT", "????");
if (inputFolder) {
     var fileList = inputFolder.getFiles('*.eps');
     for (var i = 0; i < fileList.length; i++) {
          if (fileList[i] instanceof File && fileList[i].hidden == false) {
               var doc = app.open(fileList[i]);
               doc.textFrames.length && writeLog(doc);
               
          }
     }
}
Loginfo.close();

// load the library
function writeLog(a) {
if (ExternalObject.AdobeXMPScript == undefined) {
ExternalObject.AdobeXMPScript = new
ExternalObject("lib:AdobeXMPScript");
}

var ns = "http://ns.adobe.com/xap/1.0/t/pg/"; // Fonts namespace

var propName = "Fonts"; // property name
var fieldFontName = "stFnt:fontName"; // field name
var fieldFontType = "stFnt:fontType"; // field name
var msg = ""

//Create an XMPMeta object from the active documents XMPString:
var myXmp = new XMPMeta(app.activeDocument.XMPString);

var fontNumber = myXmp.countArrayItems(ns,propName); // activeDocument used font count

if (fontNumber !=0) // if there's at least 1 font, proceed
     {     
         for (i=1; i<=fontNumber; i++)
               {
                    var fontname = myXmp.getProperty(ns,propName + "[" + i + "]" + fieldFontName);
                    var fonttype = myXmp.getProperty(ns,propName + "[" + i + "]" + fieldFontType);
                    msg += i + ". " + fontname + " - " + fonttype + "\n";
                    Loginfo.writeln("File: " + a.name  + "\n" +  fontname  +  "\n" +   fonttype + "stFnt:fontFamily" );
               }
           //alert(fonttype)
           //if(fonttype == "Open Type"||"True Type"){
           //alert(msg,"Font details",);
            }
            //alert(msg);
     //}
//else 
}

var doc = app.activeDocument;

// create text outlines if desired.
if (confirm("Create text outlines?", true)) { while (doc.textFrames.length != 0) { doc.textFrames[0].createOutline(); }}
executeMenuCommand('save');
executeMenuCommand('close');