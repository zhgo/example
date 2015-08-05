var React = require("react");
// var frontify = require("../shared/frontify.js");
var frontify = require("frontify");
var Container = require("../shared/container.jsx");

var IndexSignin = React.createClass({
  componentDidMount: function(){
    frontify.formValidate("#form1", function(data){
      console.log(data);
    }, function(err){
      console.log(err);
    });
  },
  
  render: function(){
    return (<div className="container">
    <form id="form1" action="/collab/index/signin" method="post" className="form-signin">
      <h2 className="form-signin-heading">Please sign in</h2>
      <label for="email" className="sr-only">Email address</label>
      <input type="email" name="email" className="form-control" placeholder="Email address" data-rule-required="true" data-rule-email="true" />
      <label for="password" className="sr-only">Password</label>
      <input type="password" name="password" className="form-control" placeholder="Password" />
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

React.render(<IndexSignin />, document.body);
