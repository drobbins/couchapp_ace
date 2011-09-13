function(cb, e, args) {
  var db = $$(this).app.db;
  db.allDesignDocs({
    success : function(ddocs){
      cb(ddocs);
    }
  });
};
