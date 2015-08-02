require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({4:[function(require,module,exports){
'use strict';

(function () {
  var React = require('react/addons');
  var injectTapEventPlugin = require('react-tap-event-plugin');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  //http://localhost:8081/#collab/issue/browse_by_set/2?id=1
  /*
   hash: "#collab/issue/browse_by_set/2?id=1"
   host: "localhost:8081"
   hostname: "localhost"
   href: "http://localhost:8081/#collab/issue/browse_by_set/2?id=1"
   origin: "http://localhost:8081"
   pathname: "/"
   port: "8081"
   protocol: "http:"
   */

  var hash = window.location.hash;

  if (hash == "" || hash.length == 1) {
    hash = "#collab/index/index";
  }

  hash = hash.substr(1);

  var urlArr = hash.split("?");

  var pathArr = urlArr[0].split("/");

  var queryArr = typeof urlArr[1] == "undefined" ? [] : urlArr[1].split("&");

  var module = typeof pathArr[0] == "undefined" ? "collab" : pathArr.shift();
  var controller = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift();
  var action = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift();
  var args = pathArr;

  console.log(module, controller, action, args);

  var u = URL(module, controller, action, args);

  function URL() {
    var args = Array.prototype.slice.call(arguments);
    console.log(arguments, args);
  }

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  /*var ScriptClass = React.createClass({
    render: function(){
      var p = "/app/"+module+"/"+controller+"/"+action+".js";
      return <script src={p} type="text/jsx" />
    }
  });
  
  React.render(<ScriptClass />, document.body);*/

  function loadJS(m, c, a) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = "/app/" + m + "/" + c + "_" + a + ".js";
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
  }

  loadJS(module, controller, action);
})();

},{"react-tap-event-plugin":144,"react/addons":145}]},{},[4]);
