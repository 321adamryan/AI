// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - FitArtboard.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: fits the artboard to selected artwork
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// ---------------------------------------

// Make sure we have an open document, or else open one
if( app.documents.length == 0 ) {
	fileToProcess = File.openDialog();
	app.open(fileToProcess);
}

// Select margin size; default to 20
var myBorder = -1;
var myBorderInput = -1;
while (myBorder < 0 || myBorder > 100 || isNaN(myBorder) ) {
	myBorderInput = prompt("Size of padding around image, in points (0-100)","20","Padding Size");
	myBorder = parseInt(myBorderInput);
}

// Main
var doc = app.activeDocument;

var myVisibleBounds = doc.visibleBounds; // Rect, which is an array;

myVisibleBounds[0] -= myBorder; // left coordinate (use negative values to add artboard)
myVisibleBounds[1] += myBorder; // top coordinate
myVisibleBounds[2] += myBorder; // right coordinate
myVisibleBounds[3] -= myBorder; // bottom coordinate (use negative values to add artboard)

doc.artboards[0].artboardRect = myVisibleBounds;