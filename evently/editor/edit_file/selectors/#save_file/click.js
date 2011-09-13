function(){
  var db = $$(this).app.db,
      file = $$(this).app.current_file,
      editor = $$(this).app.editor;

  file.parent[file.file_name] = editor.getSession().getValue();
  $("input.save").val("Saving...");
  db.saveDoc($$(this).app.current_design_doc, {
    success : function(response){
      $("input.save").val("Saved!");
      $("#editor_notices").addClass("success").html("Save Successful");
    }
  });
}
