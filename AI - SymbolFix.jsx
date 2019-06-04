// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SymbolFix.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script selects a named symbol and allows it  to be programatically updated using an action
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var myDoc = app.activeDocument;

//Create the layers
var layerName = "Logo"
var myLayer = myDoc.layers.add();
myLayer.name = layerName

//Paste In Front
app.executeMenuCommand ('pasteFront')

//Send layer to the back
myLayer.zOrder(ZOrderMethod.BRINGTOFRONT);

// Code wait
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
wait(4000);

//Code Select Symbol Item
var idoc = app.activeDocument; // get active document  
for (i=0; i<idoc.symbolItems.length; i++) // loop thru all symbol items in the active document  
{  
var symbolitem = idoc.symbolItems[i]; // get each symbol item  
if (symbolitem.symbol.name == "Logo") // check if it is an instance of "Apples" symbol  
{  
symbolitem.selected = true; // if it is, then select it  
}  
} 

app.executeMenuCommand("deselectall"); 

// Code wait
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
wait(1000);

// Code Select Artwork on Layer
var docRef = app.activeDocument;  
var layers = docRef.layers;  
var myLayer = layers["Logo"]; //this defines the layer that you want to get the selection from        
docRef.selection = null; //ensure there is nothing in the document selected already. this way you only get the selection you want.  
for(var a=0;a<myLayer.pageItems.length;a++){ //here we are looping through each pageItem of myLayer.  
var currentItem = myLayer.pageItems[a];  
currentItem.selected = true;  
}  

// Code wait
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
wait(1000);

// Call Action
app.doScript('Fix', 'Symbols')

// Wrap It Up
app.activeDocument.layers.getByName('Logo').remove();
app.executeMenuCommand ('save')
app.executeMenuCommand ('close')