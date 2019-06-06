// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - EXPColors.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: exports colors used within a file
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    

try {  
      if (app.documents.length > 0 ) {  
      var destFolder = null;  
      destFolder = Folder.selectDialog( 'Select folder for CSV output.', '~' );  
      if (destFolder != null) {  
      var doc = activeDocument;    
      var col = doc.swatches;    
      var info = new Array();  
      if(doc.documentColorSpace == DocumentColorSpace.CMYK)    
      {    
        info.push("I.D.,C,M,Y,K");    
        for(var i = 0; i < col.length;i++)    
        {    
      if(col[i].color=="[CMYKColor]")    
      {    
      var c = Math.round(col[i].color.cyan);    
      var m = Math.round(col[i].color.magenta);    
      var y = Math.round(col[i].color.yellow);    
      var k = Math.round(col[i].color.black);    
        info.push(i+","+c+","+m+","+y+","+k);    
      } else {info.push(i);}    
      }    
      }    
      if(doc.documentColorSpace == DocumentColorSpace.RGB)    
      {    
        info.push("I.D.,R,G,B");    
        for(var i = 0; i < col.length;i++)    
        {    
      if(col[i].color=="[RGBColor]")    
      {    
      var r = Math.round(col[i].color.red);    
      var g = Math.round(col[i].color.green);    
      var b = Math.round(col[i].color.blue);    
      info.push(i+","+r+","+g+","+b);    
      }  else {info.push(i);}    
      }    
      }  
      var listName = doc.name + ".csv";  
      var listfile = destFolder + "/" + listName;  
      var thefile = new File(listfile); //pass the file to a Variable    
      var isopen = thefile.open("w"); //open file for editing    
      if (isopen)//test file is open    
      {    
        thefile.seek(0,0);    
        for(var j = 0; j < info.length; j++)    
        {    
        thefile.writeln(info[j]);    
        }    
        thefile.close();    
      }  
      alert('Export Complete');  
      }  
      else{  
      alert('Export Aborted');  
      }  
      }  
      else{  
      throw new Error('There are no documents open!');  
      }  
    }  
    catch(e) {  
      alert( e.message, "Script Alert", true);  
    }  