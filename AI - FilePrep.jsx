// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - FilePrep.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: prepares a file
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//set document settings
app.executeMenuCommand('doc-color-cmyk'); 
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
myLayer.visible = false
//------------------------------Spec Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;
//Create the layers
{
var layerName = "Spec"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = false
}    
//Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
//spec2text   
// ===========================
// Tell the script to only work on the open, focused document  
var myDocument = app.activeDocument;        
// grab ahold of the artboards  
for (var i = 0; i < app.activeDocument.artboards.length; i++)  
{  
var artboard = app.activeDocument.artboards[i];         
// For each artboard, add a new text frame  
var myLabel = myDocument.textFrames.add();        
// set screen resulution for mathmatics 
var ppi = 72                       
myLabel.contents = 'Artboard Size\n' + (width/ppi).toFixed(2) + '"' + " x " + (height/ppi).toFixed(2) + '"\n' + "Area=" + ((width/ppi)*(height/ppi)).toFixed(2);          
// this line controls the font size  
myLabel.textRange.characterAttributes.size = 12;  
myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Arial-BoldMT");       
// this line positions the text relative to each artboard  
myLabel.position = [artboard.artboardRect[0], artboard.artboardRect[1]-10];          
}  
//Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
//Lock that down
myLayer.visible = false;
myLayer.locked = true;
myLayer.printable = false;
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
var month = new Date().getMonth()+1 //January is 0!
var day = new Date().getDate()
myLabel.contents = ('Rev:'+year+"-"+month+"-"+day);              
// this line controls the font size  
myLabel.textRange.characterAttributes.size = 11;  
myLabel.textRange.characterAttributes.textFont = textFonts.getByName("Arial-BoldMT");           
// this line positions the text relative to each artboard            
myLabel.position = [artboard.artboardRect[0]+1, artboard.artboardRect[1]];   
myLabel.rotate(0);    
}
//Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
//Lock that down
myLayer.visible = false;
myLayer.locked = true;
myLayer.printable = false;
 







