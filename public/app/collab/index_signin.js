require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({3:[function(require,module,exports){
'use strict';

(function () {
  var React = require('react');
  var mui = require('material-ui');
  var injectTapEventPlugin = require("react-tap-event-plugin");
  var TextField = mui.TextField;

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  var SomeAwesomeComponent = React.createClass({
    displayName: 'SomeAwesomeComponent',

    render: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(TextField, {
          hintText: "Hint Text" }),
        React.createElement('br', null)
      );
    }

  });

  React.render(React.createElement(SomeAwesomeComponent, null), document.body);
})();

},{"material-ui":39,"react":317,"react-tap-event-plugin":144}]},{},[3]);
