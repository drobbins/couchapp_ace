function(e, args){

  //Descend through a given object according to a / seperated path
  //and return a reference to the file the path leads to.
  var get_file_in_object = function(object, path){
    var pa = path.split("/"),
        file = object[pa[0]]
    for(var i=1; i<pa.length; i+=1){
      file = file[pa[i]];
    }
    return file;
  };

  var editor = ace.edit("editor");
  var ddoc = $$(this).app.current_design_doc;
  var file = get_file_in_object(ddoc, args);

  editor.getSession().setValue(file);


}
