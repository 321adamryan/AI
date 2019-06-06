// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - BreakSymbols.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: breaks all symbols
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//select all on active artboard
var doc = app.activeDocument; 
    doc.selectObjectsOnActiveArtboard(); 
    //Expand Objects
    app.executeMenuCommand('Expand3');
    //objectCheckbox.value = true;
    //fillCheckbox.value = false;
    //strokeCheckbox.value = false;
    //DialogBox.show();