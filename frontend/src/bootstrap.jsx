var frontify = require("./shared/frontify.js");

window.onhashchange = function() {
  frontify.loadJS(frontify.parseAction());
};

frontify.loadJS(frontify.parseAction());