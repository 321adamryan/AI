// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - OutlinePlus.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script Outlines Text and creates a text log
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//------------------------------Item Number Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
var  seperator = "\n" 
//Create the layers
{
var layerName = "Font"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
}

  // Tell the script to only work on the open, focused document  
    var myDocument = app.activeDocument.activeLayer;  
     // grab ahold of the artboards  
    for (var i = 0; i < app.activeDocument.artboards.length; i++)  
    {  
              var artboard = app.activeDocument.artboards[i];  
              // For each artboard, add a new text frame  
              var myLabel = myDocument.textFrames.add(); 
              myLabel.contents = ("Times-Roman");
              
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size = 10;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Times-Roman");
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[0]+1, artboard.artboardRect[1]];   
              myLabel.rotate(0);
              myLabel.note = myLabel.textRange.characterAttributes.textFont.family  + seperator + myLabel.textRange.characterAttributes.textFont.style + seperator + myLabel.textRange.characterAttributes.size;
	}

 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.visible = true;
myLayer.locked = false;
myLayer.printable = false;
 
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = false;

