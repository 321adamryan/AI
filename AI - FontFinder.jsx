// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - FontFinder.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script finds font names installed and creates a document with them
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var edgeSpacing = 10;
var columnSpacing = 230;
var docPreset = new DocumentPreset;
docPreset.width = 1191.0;
docPreset.height = 842.0;

var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = " ";
var x = edgeSpacing
var y = (docRef.height - edgeSpacing);

var iCount = textFonts.length;
for (var i=0; i <iCount; i++){
    sFontName = textFonts[i].name;
    sFontName += " " ;
    sFontName = sFontName +textFonts[i].style;
    
    var textRef = docRef.textFrames.add();
    textRef.textRange.characterAttributes.size=10;
    textRef.contents=sFontNames;
    textRef.top=y;
    textRef.left=x;
    
    //check if text frame will go off document
    
    if ((x+textRef.width)>docRef.width){
        textReft.remove();
        iCount = i;
        break;
        }
    else{
        textRef.textRange.characterAttributes.textFont=textFont.getByName(textFonts[i].name);
        redraw();
        if((y-=(textRef.height))<=20){
            y=(docRef.height-edgeSpacing);
            x+=columnSpacing;
            }
        }
    }