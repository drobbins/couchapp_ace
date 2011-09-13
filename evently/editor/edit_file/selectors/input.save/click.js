function(){
  var db = $$(this).app.db,
      file = $$(this).app.current_file,
      editor = $$(this).app.editor;

  file.parent[file.file_name] = editor.getSession().getValue();
  debugger;
  db.saveDoc($$(this).app.current_design_doc, {
    success : function(response){
      alert("Saved");
    }
  });
  //editor.getSession().setValue(file);
}
