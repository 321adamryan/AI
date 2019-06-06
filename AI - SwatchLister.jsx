// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SwatchLister.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script creates a swatch report
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


main();

function main() {
    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches;
    var pageNumber = 2;
    var count = 0;
    if (selectedSwatches.length > 0) {
        var text = (activeDocument.name) +  '-SWATCHES:\n';
        for (var i = 0; i < selectedSwatches.length; i++) {
            var swatch = selectedSwatches[i]
            var color = swatch.color;
            // Spot
            if (color.typename == "SpotColor") {
                count++;
                text +=  color.spot.name   + "\n";
                color = color.spot.color;
                if (count % 7 == 0)
                    pageNumber++;
            }

        }
        var textend = '';
        saveTxt(text + textend);
    } else {
        alert("No Swatches Selected.");
    }
}


function saveTxt(txt) {
    var name = app.activeDocument.name.replace(/\.[^\.]+$/, '');
    var path = (app.activeDocument.path != "") ? app.activeDocument.path : "~";
    var saveFile = new File(path + "/"  + "REPORT" + "/" + name + "-SWATCH.txt");
    
    if (saveFile.exists)
        saveFile.remove();
    saveFile.encoding = "UTF8";
    saveFile.open("e", "TEXT");
    saveFile.writeln(txt);
    saveFile.close();

/*
    alert("Saved to File:\n" + saveFile.fullName)
   */ 
}
/*
executeMenuCommand('save');
executeMenuCommand('close');
*/