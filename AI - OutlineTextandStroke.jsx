// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - OutlineTextandStroke.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: Outlines Text and Strokes
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var doc = app.activeDocument; 
    doc.selectObjectsOnActiveArtboard();
    
function Outliner(curDoc, selection){
	for (i = 0; i < selection.length; i++) {
    	curDoc.selection = selection[i];
    	//Determine if selection is text or a path
	    outlineobjecttype = String(selection[i].typename);
	    if (outlineobjecttype.indexOf('Text') >= 0) {
	    	//Hey! it's Text: let's create outlines.
	    	selection[i].createOutline();
	    } else if (outlineobjecttype.indexOf('Path') >= 0) {
	    	//Hey! it's a Path, let's apply a live outline and expand that.
			app.executeMenuCommand ('Live Outline Stroke');
			app.executeMenuCommand ('expandStyle');
	    }
	}
	curDoc.selection = null;
}

function get_document() {
	if (app.documents.length == 0 ) {
		Window.alert("You must open at least one document.");
		return False;
	} else {
	    return app.activeDocument;
	}
}

function get_selection(curDoc) {
	var sel = curDoc.selection; // get selection
	var numselectedobjects = sel.length;
	var container = curDoc.activeLayer;

	//Only if there are objects selected
	if (numselectedobjects == 0) {
		alert("No objects selected.");
		return False;
	} else {
		if(container.locked || !container.visible){
	        alert("Please select objects on an unlocked and visible layer,\nthen run this script again.");
	        return False;
	    }
	}
	return selection;
}

var curDoc = get_document();
var selection = get_selection(curDoc);
Outliner(curDoc, selection);