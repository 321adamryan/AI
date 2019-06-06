// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - PlaceItemNumber.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: Places part of the filename in the corner of the file
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
var layerName = "ItemNumber"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++


}

TnewCMYKColor = new CMYKColor ();
TnewCMYKColor.black = 0;
TnewCMYKColor.cyan = 0;
TnewCMYKColor.magenta = 0;
TnewCMYKColor.yellow = 0;

  // Tell the script to only work on the open, focused document  
    var myDocument = app.activeDocument;  
     // grab ahold of the artboards  
    for (var i = 0; i < app.activeDocument.artboards.length; i++)  
    {  
              var artboard = app.activeDocument.artboards[i];  
              // For each artboard, add a new text frame  
              var myLabel = myDocument.textFrames.add(); 
              var year = new Date().getFullYear()
			  myLabel.contents = ("#"+activeDocument.name.substring(0,5));
              
   
//MGT-06x06 NFL               
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size =10;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Orbit-Bold");
              myLabel.textRange.characterAttributes.fillColor = TnewCMYKColor;
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[1]+650, artboard.artboardRect[1]-380];   
              myLabel.rotate(0);
/*
//MGT-03x05                
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size =10;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Arial-Black");
              myLabel.textRange.characterAttributes.fillColor = TnewCMYKColor;
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[1]+605, artboard.artboardRect[1]-295];   
              myLabel.rotate(0);
*/              
/*
//MGT-06x06                
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size =10;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Arial-Black");
              myLabel.textRange.characterAttributes.fillColor = TnewCMYKColor;
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[1]+650, artboard.artboardRect[1]-380];   
              myLabel.rotate(0);
*/
/*
//MGT-12x12    
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size =18;  
              myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Arial-Black");
              myLabel.textRange.characterAttributes.fillColor = TnewCMYKColor;
              
              // this line positions the text relative to each artboard            
              myLabel.position = [artboard.artboardRect[1]+620, artboard.artboardRect[1]-760];   
              myLabel.rotate(0);
 */             
              
	}

 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);


//Lock that down
myLayer.visible = true;
myLayer.locked = false;
myLayer.printable = true;



//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;
/*
    //Tear-away
//Create the layers
{
var layerName = "Cuts"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = false
}

//set color
newCMYKColor = new CMYKColor ();
newCMYKColor.black = 0;
newCMYKColor.cyan = 100;
newCMYKColor.magenta = 0;
newCMYKColor.yellow = 0;

//Create Rectangle
    var docRef = app.activeDocument;  
    var artboardRef = docRef.artboards;  
      
    for(i=0;i<artboardRef.length;i++){  
         var top=artboardRef[i].artboardRect[1] -14;  
         var left=artboardRef[i].artboardRect[0]+2;  
         var width=7;  
         var height=18;  
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


 

