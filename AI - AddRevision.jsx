// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - AddRevision.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: Adds a Revision date in the corner
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//------------------------------Item Number Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;

//Create the layers
{
var layerName = "REVISION"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
}

  // Tell the script to only work on the open, focused document  
    var myDocument = app.activeDocument;  
     // grab ahold of the artboards  
    for (var i = 0; i < app.activeDocument.artboards.length; i++)  
    {  
              var artboard = app.activeDocument.artboards[i];  
              // For each artboard, add a new text frame  
              var myLabel = myDocument.textFrames.add(); 
              var year = new Date().getFullYear()
			  myLabel.contents = ('Rev'+year);

//set font color
newCMYKColor = new CMYKColor();
newCMYKColor.black = 0;
newCMYKColor.cyan = 0;
newCMYKColor.magenta = 0;
newCMYKColor.yellow = 0;
myLabel.textRange.characterAttributes.fillColor=newCMYKColor;
                      
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size = 6;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Times-Roman");
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[0]+5, artboard.artboardRect[1]-5];   
              myLabel.rotate(0);    
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
myLayer.locked = true;

//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

/*
//Create the layers
{
var layerName = "RevCuts"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = true
}

//Create Rectangle
    var docRef = app.activeDocument;  
    var artboardRef = docRef.artboards;  

    
    for(i=0;i<artboardRef.length;i++){  
         var top=artboardRef[i].artboardRect[1] -4;  
         var left=artboardRef[i].artboardRect[0] +5;  
         var width=25;  
         var height=8;  
         var rect = docRef.pathItems.rectangle (top, left, width, height);  
         rect.fillColor = new NoColor();
         rect.strokeColor = activeDocument.swatches['CUTPATH'].color;
         rect.strokeWidth = .216;
         }  

 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = true
   */  


