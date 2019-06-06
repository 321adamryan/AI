// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - AdamPrint.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description:  Prints a file asuming a printer preset is present
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var docRef = activeDocument;

//Printer Settings Top
docRef.arboardName="TOP"
printerName="Xerox 700 Integrated Color Server PS v1.5";
printPreset="JumboHeaderTop";

// # of copies
Copies="3";

//Print It
docRef.print();

