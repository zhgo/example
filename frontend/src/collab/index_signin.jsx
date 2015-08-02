(function () {
  let React = require('react');
  let mui = require('material-ui');
  let injectTapEventPlugin = require("react-tap-event-plugin");
  let RaisedButton = mui.RaisedButton;
  let TextField = mui.TextField;
  let ThemeManager = new mui.Styles.ThemeManager();

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  let SomeAwesomeComponent = React.createClass({

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    render() {
      return (
          <div>
          <RaisedButton label="Default" />
          <TextField
              hintText="Hint Text" /><br/>
          <RaisedButton label="Default" />
          </div>
      );
    }

  });

  React.render(<SomeAwesomeComponent />, document.body);

})();
