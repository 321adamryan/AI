// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SingleLineCode.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script features single line elements to be ran in illustrator
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Lock Reg Layer
app.activeDocument.layers.getByName('Registration Marks').locked = true; 

//Print cut layer
app.activeDocument.layers.getByName('Cut').printable = true; 

//delete art layer
app.activeDocument.layers.getByName('Art').remove(); 

// turns on the opposite state   
app.executeMenuCommand('showguide');  
  
// turns on the opposite state  
app.executeMenuCommand('lockguide');  
  
// converts one or more selected guides back into a normal path  
app.executeMenuCommand('releaseguide'); 