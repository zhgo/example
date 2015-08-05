var React = require("react");
var Container = require("../shared/container.jsx");

var IndexIndex = React.createClass({
  componentDidMount: function(){
    //$(React.findDOMNode(this.refs.inputDate)).datepicker();
    $("#inputDate").datepicker();
  },
  render: function(){
    return (<div className="container">
      <a href="#collab/index/signin">Sign In</a>
      <input type="text" id="inputDate" ref="inputDate" />
    </div>);
  }
});

React.render(<IndexIndex />, document.body);
