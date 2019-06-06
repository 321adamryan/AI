// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - FindPrinters.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: shows registered printers
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var docRef = documents.add();
var textRef = docRef.textFrames.add();

var iCount = printerList.length;
textRef.contents += "Printers...\r";
for ( var i=0; i<iCount; i++ ) {
    textRef.contents +=printerList[i].name;
    textRef.contents += "\r\t";
    }
textRef.top = 600;
textRef.left = 200;
redraw();