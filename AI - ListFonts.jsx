// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
//       filename: AI - ListFonts.jsx
//          coder: AdamRyan
//        program: Adobe Illustrator
//    description: Lists active document fonts
//      extention: JSX
//       licensce: OpenSource
//        website: adamryan.info
//
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

#target illustrator

var edgeSpacing = 10;
var columnSpacing = 195;
var docPreset = new DocumentPreset;
docPreset.width = 800;
docPreset.height = 600;
var idoc = documents.addDocument(DocumentColorSpace.CMYK, docPreset);

var x = edgeSpacing;
var yyy = (idoc.height - edgeSpacing);
var fontCount = textFonts.length;
var col = 1;
var ABcount = 1;

var pBar = new ProgressBar('aiscripts.com - Font List Script');

pBar.reset('Processing ...', fontCount);

for(var i=0; i<fontCount; i++, pBar.hit(i+' '+sFontName)) {
    sFontName = textFonts[i].name;
    var itext = idoc.textFrames.add();
    itext.textRange.characterAttributes.size = 12;
    itext.contents = sFontName;
    //$.writeln(yyy);
    itext.top = yyy;
    itext.left = x;

    itext.textRange.characterAttributes.textFont = textFonts.getByName(textFonts[i].name);
    
    // check wether the text frame will go off the bottom edge of the document
    if( (yyy-=(itext.height)) <= 20 ) {
        yyy = (idoc.height - edgeSpacing);
        x += columnSpacing;
        col++;
        if (col>4) {
            var ab = idoc.artboards[ABcount-1].artboardRect;
            var abtop = ab[1];
            var ableft = ab[0];
            var abright = ab[2];
            var abbottom = ab[3];

            var ntop = abtop;
            var nleft = abright+edgeSpacing;
            var nbottom = abbottom;
            var nright = abright-ableft+nleft;

            var abRect = [nleft, ntop, nright, nbottom];
            var newAb = idoc.artboards.add(abRect);

            x = nleft+edgeSpacing;
            ABcount++;
            col=1;
       } 
    } 
    //else yyy-=(itext.height);
}
pBar.close();

// progress bar by Marc Autret
function ProgressBar(/*str*/title)
{
     var w = new Window('palette', ' '+title, {x:0, y:0, width:340, height:60}),
          pb = w.add('progressbar', {x:20, y:12, width:300, height:12}, 0, 100),
          st = w.add('statictext', {x:10, y:36, width:320, height:20}, '');
     st.justify = 'center';
     w.center();
     this.reset = function(msg,maxValue)
          {
          st.text = msg;
          pb.value = 0;
          pb.maxvalue = maxValue||0;
          pb.visible = !!maxValue;
          w.show();
          };
     this.hit = function(value) {++pb.value; st.text = '\tProcessing... ' + value; w.update()};
     this.hide = function() {w.hide();};
     this.close = function() {w.close();};
};