function DVCleaner(){
   var doc = app.activeDocument;
   for (var i = doc.variables.length - 1; i > -1; i--) {
        doc.variables[i].remove();
   }
};
DVCleaner();