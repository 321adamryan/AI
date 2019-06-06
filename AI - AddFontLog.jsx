// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - addfontlog.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description:  This script analyzes a file within a folder and makes a font log 
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


#target illustrator

var inputFolder = Folder.selectDialog("Select a folder contains '*.eps' files ");
var Loginfo = new File(inputFolder + "/Font.info.txt");
Loginfo.open("w", "TEXT", "????");
if (inputFolder) {
     var fileList = inputFolder.getFiles('*.eps');
     for (var i = 0; i < fileList.length; i++) {
          if (fileList[i] instanceof File && fileList[i].hidden == false) {
               var doc = app.open(fileList[i]);
               doc.textFrames.length && writeLog(doc);
               doc.close(SaveOptions.DONOTSAVECHANGES);
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
                    Loginfo.writeln("File: " + a.name  + ":" +  fontname  + ":" +   fonttype );
               }
           //alert(fonttype)
           //if(fonttype == "Open Type"||"True Type"){
           //alert(msg,"Font details",);
            }
            //alert(msg);
     //}
//else 
}