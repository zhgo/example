var React = require("react");
var Container = require("../shared/container.jsx");

var IndexIndex = React.createClass({
  componentDidMount: function(){
    $(React.findDOMNode(this.refs.inputDate)).datepicker();
  },
  render: function(){
    return (<div className="container">
    <form className="form-signin">
      <h2 className="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
      <label for="inputDate" className="sr-only">Birthday</label>
      <input type="text" id="inputDate" ref="inputDate" className="form-control" placeholder="Birthday" required />
      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </div>);
  }
});

React.render(<IndexIndex />, document.body);
