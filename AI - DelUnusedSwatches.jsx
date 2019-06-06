// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - DelUnusedSwatches.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: deletes unused swatches from the swatch pallet
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


function deleteUnusedSwatches (doc) {
	var items = doc.pageItems,
	len = items.length,
	sw = doc.swatches,
	slen = sw.length,
	arr = [],
	str = null,
	i = 0,
	j,
	temp = [],
	p,
	path,
	isFill = (function (){
		p = doc.pathItems.rectangle(0,0,100,100);
		p.fillColor = sw[2].color;
		doc.selection = [p];
		if (sw.getSelected()[0] == sw[2]){
			p.remove();
			return 1
		} else {
			p.remove();
			return 0
		}
	})();

	for (; i < len; i ++){
		doc.selection = [items[i]];
		arr.push(sw.getSelected()[0]);
		isFill ? (items[i].stroked && temp.push(items[i].strokeColor)) : (items[i].filled && temp.push(items[i].fillColor));
	}

	while (temp.length){
		swatch = temp.pop();
		path = doc.pathItems.rectangle(0,0,100,100);
		isFill ? (path.fillColor = swatch) : (path.strokeColor = swatch);
		doc.selection = [path];
		arr.push(sw.getSelected()[0]);
		path.remove();
	}

	str = arr.toString();
	for (j = slen - 1; j > 1; j --){
		RegExp(sw[j].name).test(str) || sw[j].remove();
	}
}

deleteUnusedSwatches(app.activeDocument);