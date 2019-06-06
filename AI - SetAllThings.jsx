// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI -SetAllThings.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: This script resizes selected elements
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


var centerObjects= false;
function main(){
	var item,center_point;
	var toPixels=function(v){
	
	var units={
						'in':72,
						'mm':2.8346455078125,
                           'px':1,
                           'pt':1,
			},re = /(\d*[.]*\d+)(mm|in|ft|cm|px|pt)/i,m,u,rep;
		//derivitave
		units['cm'] = units['mm']*10;
		units['ft'] = units['in']*12;

		while(m=v.match(re)){
			u = m[2].toLowerCase();
			if (units[u]){
				rep = (m[1]*units[u]);
				v = v.replace(re,rep);
			}
		}
		return v;
	}

    var trace = function (m){alert(m)};
    if(activeDocument == null){trace("No open document found. Please open a document.");return;}
    if(activeDocument.selection.length == 0){trace("Nothing selected. Please select one or more items.");return;}
    var i = "width,height";
    if( i===null ){return false;}
    var v = "108px,108px";
    if (v === null ){return false;}
	centerObjects="yes";
	v=toPixels(v);
    // here's where we walk through all objects.
    var assign = function (i,v){
        for (var x=0 ; x < activeDocument.selection.length ; x++){
		 
				item = activeDocument.selection[x];
				//get top and left width and height values
				center_point = [item.top-(item.height/2),item.left+(item.width/2)];
		 
			item[i] = eval(v);
			//redraw();
			if(centerObjects){
				//center_point = [item.top+(item.height/2),item.left+(item.width/2)];
				item.top = center_point[0] + (item.height/2);
				item.left = center_point[1] - (item.width/2);
			}
        };
    }
    if(  i.indexOf(',') !== -1){  i =  i.split(',');}
    //split if a list, but not if function is found.
    if( v.indexOf(',') !== -1){ v = v.split(',');}
    
    if(typeof i !== "string")
    {
        for ( var len=i.length,c=0;c<len;c++)
        {
            assign(i[c],typeof v !== 'string' ? v[c] : v);
        }
    } else
    {
        assign(i,v);
    }
	redraw();
	return true;
	
}
main();