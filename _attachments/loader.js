
function custom_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

custom_load([
  //Put the path to custom scripts you want to load here
  "scripts/ace/src/ace.js",
  "scripts/ace/src/mode-javascript.js",
  "scripts/ace/src/mode-json.js",
  "scripts/ace/src/mode-html.js"
]);

// Paths to all the Ace plugins
//"scripts/ace/src/ace-uncompressed.js",
//"scripts/ace/src/ace.js",
//"scripts/ace/src/cockpit-uncompressed.js",
//"scripts/ace/src/cockpit.js",
//"scripts/ace/src/keybinding-emacs.js",
//"scripts/ace/src/keybinding-vim.js",
//"scripts/ace/src/mode-c_cpp.js",
//"scripts/ace/src/mode-clojure.js",
//"scripts/ace/src/mode-coffee.js",
//"scripts/ace/src/mode-csharp.js",
//"scripts/ace/src/mode-css.js",
//"scripts/ace/src/mode-groovy.js",
//"scripts/ace/src/mode-html.js",
//"scripts/ace/src/mode-java.js",
//"scripts/ace/src/mode-javascript.js",
//"scripts/ace/src/mode-json.js",
//"scripts/ace/src/mode-ocaml.js",
//"scripts/ace/src/mode-perl.js",
//"scripts/ace/src/mode-php.js",
//"scripts/ace/src/mode-python.js",
//"scripts/ace/src/mode-ruby.js",
//"scripts/ace/src/mode-scad.js",
//"scripts/ace/src/mode-scala.js",
//"scripts/ace/src/mode-scss.js",
//"scripts/ace/src/mode-svg.js",
//"scripts/ace/src/mode-textile.js",
//"scripts/ace/src/mode-xml.js",
//"scripts/ace/src/theme-clouds.js",
//"scripts/ace/src/theme-clouds_midnight.js",
//"scripts/ace/src/theme-cobalt.js",
//"scripts/ace/src/theme-crimson_editor.js",
//"scripts/ace/src/theme-dawn.js",
//"scripts/ace/src/theme-eclipse.js",
//"scripts/ace/src/theme-idle_fingers.js",
//"scripts/ace/src/theme-kr_theme.js",
//"scripts/ace/src/theme-merbivore.js",
//"scripts/ace/src/theme-merbivore_soft.js",
//"scripts/ace/src/theme-mono_industrial.js",
//"scripts/ace/src/theme-monokai.js",
//"scripts/ace/src/theme-pastel_on_dark.js",
//"scripts/ace/src/theme-solarized_dark.js",
//"scripts/ace/src/theme-solarized_light.js",
//"scripts/ace/src/theme-textmate.js",
//"scripts/ace/src/theme-twilight.js",
//"scripts/ace/src/theme-vibrant_ink.js",
//"scripts/ace/src/worker-coffee.js",
//"scripts/ace/src/worker-css.js",
//"scripts/ace/src/worker-javascript.js"
