// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - ListFonts.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: scripts to remove show and lock guides
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// turns on the opposite state   
app.executeMenuCommand('showguide');  
  
// turns on the opposite state  
app.executeMenuCommand('lockguide');  
  
// converts one or more selected guides back into a normal path  
// at least one selected guide is required  
app.executeMenuCommand('releaseguide'); 