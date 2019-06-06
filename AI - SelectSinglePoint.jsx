﻿// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - SelectSinglePoint.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script can be used to select single stray points 
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var userPointPrompt = prompt('Select paths with LESS than how many points: ', '4');

if(documents.length > 0) {
	doc = activeDocument;

	// clear the old selection
	doc.selection = null;

	// Get the pth items
	myPaths = doc.pathItems;
	
	
	// If there are enough to process
	// if (myPaths instanceof Array) {
		
		// For each of the path itmes items
		for(i=0; i<myPaths.length; i++) {

			thisPath = myPaths[i];
		
			if( thisPath.editable == true ) {
				// Check to see how many points it has
				if( thisPath.pathPoints.length < userPointPrompt ) {
					// And keep it selected for after the
					// script runs if it meets the conditions
					thisPath.selected = true;
				}
			}
 		}		
	// }
}