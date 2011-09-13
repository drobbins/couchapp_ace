function(data){
  $$(this).app.current_design_doc = data;
  var files = [];
  data.couchapp.manifest.map(function(path){
    //Only return paths to files
    if(path.charAt(path.length-1) !== "/"){
      path = path;
      files.push(path);
    }
  });
  return {files: files};
}
