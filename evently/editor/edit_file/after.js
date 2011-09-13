function(e, path){

  //Descend through a given object according to a / seperated path
  //and returns the file the path leads to.
  var get_file_in_object = function(object, path){
    var pa = path.split("/"),
        file = object[pa[0]],
        parent = object;
    for(var i=1; i<pa.length; i+=1){
      file = file[pa[i]];
      parent = parent[pa[i-1]];
    }
    return {
      contents: file,
      parent: parent,
      file_name: pa[pa.length-1]
    }
  };
  var editor = ace.edit("editor");
  var ddoc = $$(this).app.current_design_doc;
  var object_path = path.slice(0,path.lastIndexOf("."));
  var file = get_file_in_object(ddoc, object_path);

  editor.getSession().setValue(file.contents);
  $$(this).app.current_file = file;
  $$(this).app.editor = editor;

}
