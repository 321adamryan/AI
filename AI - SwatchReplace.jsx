// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SwatchReplace.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description:  This script can be used to replace swatch colors programmatically
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//add swatch to file

//What is the new Pantone Color
    var newswatchName = 'PANTONE 1655 C'; 
//What is the old Pantone Color    
    var oldswatchName = 'PANTONE 151 C'; 

//import swatch
//Main routine    
var main = function() {    
//==========VARS==========//  
var  
//The folder to be selected    
fo  =Folder.selectDialog("Please select Pantone Bridge Folder"),    
//Files to be retrieved and referenced    
files,     
//A counter    
n,     
//A reference to the nth file    
nFile,     
//A reference to the file name    
nFileName = "",     
//a reference to teh doc layers as an object database    
layers,     
//a reference to the doc    
doc,     
//a reference to the layer    
itemLayer,     
//a reference to the placed object    
placed;    
  
//==========CHECK CONTEXT ==========//   
//Exit if no open documents  
if ( !app.documents.length ) {  
alert("You need an open document…");  
return;  
}    
doc = app.activeDocument;   
//Exit if no selected folder open    
if ( !fo ) return;      
//getting pdf files from selected folder    
files = fo.getFiles ( "*.eps");    
n = files.length;    
//Exit if no files were found    
if ( !n ) {    
alert("No files found!");    
return;    
}
//Getting layers references    
layers = getLayers ( doc );    
//Looping through files to place them inside document    
while ( n-- ) {    
nFile = files[n];    
//getting truncated file name    
nFileName = decodeURI(nFile.name.replace ( "PantoneBridge.eps", "" ).replace (/[^_]+_/, ''));    
//referencing appropriate layer    
itemLayer = layers[nFileName];    
//Creating a new layer if needed    
if ( !itemLayer ) {    
itemLayer = doc.layers.add();    
itemLayer.name = "DELETEME";    
}    
//Placing teh file on teh appropriate layer    
placed = itemLayer.placedItems.add();    
placed.file = nFile;    
}    
}    
//retrieving doc layers references in a object    
//Thus preventing access to non existing layers errors    
//as layers.getByName can throw    
function getLayers(doc){    
var layers = doc.layers, n = layers.length, o = {};    
while ( n-- ) o[layers[n].name] = layers[n];    
return o;    
}    
main();   
    
    
    //REMOVE DELETEME
      app.activeDocument.layers.getByName('DELETEME').remove(); 



//Select By Color    
app.selection = null;
if (app.activeDocument.length > 0) {
    try {
        var swatch = app.activeDocument.swatches.getByName(oldswatchName);
        var temp = app.documents[0].pathItems.rectangle(10, 10, 150, 150);
        temp.fillColor = swatch.color;

        // To select object that have CMYK Red swatch applied to stroke and fill.
        app.executeMenuCommand('Find Fill & Stroke menu item');

        // To select object that have CMYK Red swatch applied to fill.
        app.executeMenuCommand('Find Fill Color menu item');

        // To select object that have CMYK Red swatch applied to stroke.
        app.executeMenuCommand('Find Stroke Color menu item');

        temp.remove();
    } catch (e) {
        alert('CMYK Red swatch does not exists!!')
    }
}

 

//AND DONE
// the spotcolor should be in the swatchpallet already
fillwithSwatch (selectedObjects, newswatchName ); 

//remove unused swatches
//scripted actions
//creates an action, runs it, then removes it.
function QwertyflyScriptedActions_DeleteUnusedSwatches(){    
    if(app.documents.length = 0){return;}  
    var ActionSet = "QwertyflyScriptedActions"  
    var Action1Name = "KillSwatches"  
    var ActionString = '/version 3\n/name [ 24\n'+ Hexit(ActionSet) +'\n]\n/isOpen 0\n/actionCount 1\n/action-1 {\n/name [ 12\n'+ Hexit(Action1Name) +'\n]\n/keyIndex 0\n/colorIndex 0\n/isOpen 0\n/eventCount 2\n/event-1 {\n/useRulersIn1stQuadrant 1\n/internalName (ai_plugin_swatches)\n/localizedName [ 8\n5377617463686573\n]\n/isOpen 0\n/isOn 1\n/hasDialog 0\n/parameterCount 1\n/parameter-1 {\n/key 1835363957\n/showInPalette 1\n/type (enumerated)\n/name [ 17\n53656c65637420416c6c20556e75736564\n]\n/value 11\n}\n}\n/event-2 {\n/useRulersIn1stQuadrant 1\n/internalName (ai_plugin_swatches)\n/localizedName [ 8\n5377617463686573\n]\n/isOpen 0\n/isOn 1\n/hasDialog 1\n/showDialog 0\n/parameterCount 1\n/parameter-1 {\n/key 1835363957\n/showInPalette 1\n/type (enumerated)\n/name [ 13\n44656c65746520537761746368\n]\n/value 3\n}\n}\n}';  
    createAction(ActionString,ActionSet);     
    ActionString = null;    
    app.doScript(Action1Name, ActionSet, false);    
    app.unloadAction(ActionSet,"");    
    function createAction (str,act) {     
        var f = new File('~/' + act+ '.aia');     
        f.open('w');     
        f.write(str);     
        f.close();     
        app.loadAction(f);     
        f.remove();     
    }  
    function Hexit(str) {  
        var hex = '';  
        for(var i=0;i<str.length;i++) {  
            hex += ''+str.charCodeAt(i).toString(16);  
        }  
        return hex;  
    }  
}    
QwertyflyScriptedActions_DeleteUnusedSwatches();   

