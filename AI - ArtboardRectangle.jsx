// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - ArtboardRectangle.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: creates a rectangle around the artboard
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


#target illustrator  


//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "CheckLayer"
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
         var top=artboardRef[i].artboardRect[1] ;  
         var left=artboardRef[i].artboardRect[0];  
         var width=artboardRef[i].artboardRect[2]-artboardRef[i].artboardRect[0];  
         var height=artboardRef[i].artboardRect[1]-artboardRef[i].artboardRect[3];  
         var rect = docRef.pathItems.rectangle (top, left, width, height);  
         rect.fillColor = newCMYKColor
         rect.strokeColor = new NoColor();  
         }  
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.SENDTOBACK);

//Lock that down
myLayer.locked = true



 