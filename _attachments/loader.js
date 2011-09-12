
function custom_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

custom_load([
  //Put the path to custom scripts you want to load here
]);
