// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - OutlineText.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: Outlines Text
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


app.activeDocument.layers.getByName('Registration').locked = true; 
{
var doc = app.activeDocument; 
    doc.selectObjectsOnActiveArtboard();
    }

app.executeMenuCommand('Expand3');

app.executeMenuCommand('save');
app.executeMenuCommand('close');
