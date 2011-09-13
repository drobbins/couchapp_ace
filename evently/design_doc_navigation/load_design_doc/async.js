function(cb, e, args){
  var db = $$(this).app.db;
  db.openDoc("_design/"+args,{
    success: function(doc){
      cb(doc);
    }
  });
}
