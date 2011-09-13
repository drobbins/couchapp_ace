function(){
  $(this).trigger("edit_file", $(this).attr("href").slice(1));
}
