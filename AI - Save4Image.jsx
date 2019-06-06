// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - Save4Image.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This Script exports AI files as JPEG
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//Save Staged
var docName = app.activeDocument.name.split('.')[0];
exportFileToJPEG("//W2K3SERV1/Swap/00 Product Versions/Staged/" + docName );
function exportFileToJPEG(dest){
    if(app.documents.length>0){
        var exportOptions= new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        var fileSpec = new File (dest);
        var newRGBColor = new RGBColor();
        
newRGBColor.red = 255;
newRGBColor.green = 255;
newRGBColor.blue =255;
        
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting=100;
        exportOptions.artBoardClipping = true;
        exportOptions.horizontalScale = 100.0;
        exportOptions.verticalScale = 100.0;
        exportOptions.matte = true;
        exportOptions.matteColor = newRGBColor;
        exportOptions.optimization = true;        
        
        app.activeDocument.exportFile(fileSpec, type, exportOptions);
        }
    }

//scale for LoRes 216x108
// Unlock all layers (and their sublayers)  
processLayersRecursive(app.activeDocument.layers);  
  
// Process all layers under variable "parent" (including sublayers on all levels).  
function processLayersRecursive(parent){   
    for (var iLayer = 0; iLayer < parent.length; iLayer++){  
        var curLayer = parent[iLayer];  
        // Unlock the current layer  
        if (curLayer.locked){  
            curLayer.locked = false;  
        }  
        processLayersRecursive(curLayer.layers);       
    }  
} 

//select all
executeMenuCommand('selectallinartboard');
//turn into symbol
//insert set all things script when finished.
//resize artboard

/*        
//Save LoRes
var docName = app.activeDocument.name.split('.')[0];
exportFileToPSD("//W2K3SERV1/Swap/00 Product Versions/LoRes/" + docName );
function exportFileToJPEG(dest){
    if(app.documents.length>0){
        var exportOptions= new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        var fileSpec = new File (dest);
        var newRGBColor = new RGBColor();
        
       
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting=70;
        exportOptions.artBoardClipping = true;
        exportOptions.horizontalScale = 100.0;
        exportOptions.verticalScale = 100.0;
        exportOptions.matte = true;
        exportOptions.matteColor = newRGBColor;
        exportOptions.optimization = true;        
        
        app.activeDocument.exportFile(fileSpec, type, exportOptions);
        }
    }       
*/    