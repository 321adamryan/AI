// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SelectLayerByName.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script loops through and selects a named layer
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var docRef = app.activeDocument;  
    var layers = docRef.layers;  
    var myLayer = layers["Target Layer"]; //this defines the layer that you want to get the selection from  
      
    docRef.selection = null; //ensure there is nothing in the document selected already. this way you only get the selection you want.  
    for(var a=0;a<myLayer.pageItems.length;a++){ //here we are looping through each pageItem of myLayer.  
         var currentItem = myLayer.pageItems[a];  
         currentItem.selected = true;  
    }  