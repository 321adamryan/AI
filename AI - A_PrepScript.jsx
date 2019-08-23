// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - _APrepScript.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script  creates a base template with layer names
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//set document settings
app.executeMenuCommand('doc-color-rgb'); 

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

//------------------------------Background Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "Background"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = true
}
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = false

//------------------------------Text Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "Text"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = true
}
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = false



//------------------------------Art Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "Art"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = true
}
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = false
//------------------------------ItemNumber Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "Filename"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = true
}
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = false

//------------------------------Safe Layer
{
var layerName = "SafeLayer"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = false
}

//set color
newCMYKColor = new CMYKColor ();
newCMYKColor.black = 0;
newCMYKColor.cyan = 0;
newCMYKColor.magenta = 100;
newCMYKColor.yellow = 0;

//Create Rectangle
    var docRef = app.activeDocument;  
    var artboardRef = docRef.artboards;  
      
    for(i=0;i<artboardRef.length;i++){  
         var top=artboardRef[i].artboardRect[1] -10;  
         var left=artboardRef[i].artboardRect[0]+10;  
         var width=artboardRef[i].artboardRect[2]-artboardRef[i].artboardRect[0]-20;  
         var height=artboardRef[i].artboardRect[1]-artboardRef[i].artboardRect[3]-20;  
         var rect = docRef.pathItems.rectangle (top, left, width, height);  
         rect.fillColor = new NoColor()
         rect.strokeColor = newCMYKColor;  
         }  
     
 //Send layer to the back
//myLayer.zOrder(ZOrderMethod.SENDTOBACK);

//Lock that down
myLayer.locked = true
myLayer.visible = true
//------------------------------Bleed Layer
{
var layerName = "BleedLayer"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = false
}

//set color
newCMYKColor = new CMYKColor ();
newCMYKColor.black = 0;
newCMYKColor.cyan = 0;
newCMYKColor.magenta = 100;
newCMYKColor.yellow = 0;

//Create Rectangle
    var docRef = app.activeDocument;  
    var artboardRef = docRef.artboards;  
      
    for(i=0;i<artboardRef.length;i++){  
         var top=artboardRef[i].artboardRect[1]+5;  
         var left=artboardRef[i].artboardRect[0]-5; 
         var width=artboardRef[i].artboardRect[2]-artboardRef[i].artboardRect[0]+10;  
         var height=artboardRef[i].artboardRect[1]-artboardRef[i].artboardRect[3]+10;  
         var rect = docRef.pathItems.rectangle (top, left, width, height);  
         rect.fillColor = new NoColor()
         rect.strokeColor = newCMYKColor;  
         }  
     
 //Send layer to the back
//myLayer.zOrder(ZOrderMethod.SENDTOBACK);

//Lock that down
myLayer.locked = true
myLayer.visible = true


//------------------------------Cut Layer
//Apply to myDoc the active document
var myDoc = app.activeDocument;
//define firts caracter and how many layers do you need
var layerIniName =65;
var numberOfLayers=1;

//Create the layers
{
var layerName = "Cut"
var myLayer = myDoc.layers.add();
myLayer.name = layerName
layerIniName++
myLayer.printable = false
}
     
 //Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

//Lock that down
myLayer.locked = true

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
              myLabel.textRange.characterAttributes.size = 8;  
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
			  myLabel.contents = ('Rev:'+year+"/"+month+"/"+day);
              
              // this line controls the font size  
              myLabel.textRange.characterAttributes.size = 10;  
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

//Delete Unused Swatches
function deleteUnusedSwatches (doc) {
	var items = doc.pageItems,
	len = items.length,
	sw = doc.swatches,
	slen = sw.length,
	arr = [],
	str = null,
	i = 0,
	j,
	temp = [],
	p,
	path,
	isFill = (function (){
		p = doc.pathItems.rectangle(0,0,100,100);
		p.fillColor = sw[2].color;
		doc.selection = [p];
		if (sw.getSelected()[0] == sw[2]){
			p.remove();
			return 1
		} else {
			p.remove();
			return 0
		}
	})();

	for (; i < len; i ++){
		doc.selection = [items[i]];
		arr.push(sw.getSelected()[0]);
		isFill ? (items[i].stroked && temp.push(items[i].strokeColor)) : (items[i].filled && temp.push(items[i].fillColor));
	}

	while (temp.length){
		swatch = temp.pop();
		path = doc.pathItems.rectangle(0,0,100,100);
		isFill ? (path.fillColor = swatch) : (path.strokeColor = swatch);
		doc.selection = [path];
		arr.push(sw.getSelected()[0]);
		path.remove();
	}

	str = arr.toString();
	for (j = slen - 1; j > 1; j --){
		RegExp(sw[j].name).test(str) || sw[j].remove();
	}
}
deleteUnusedSwatches(app.activeDocument);



//DELETE LAYER1
 app.activeDocument.layers.getByName('Layer1').remove();

//DRAMATIC PAUSE
    wait(6000);  
    alert('Dramatic..... PAUSE!');  
      
    function wait(ms) {  
         $.sleep(ms); // Milliseconds  
    }  






