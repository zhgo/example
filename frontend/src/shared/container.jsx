var React = require("react");

var Container = React.createClass({
	render: function(){
		return (<div><nav className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container-fluid">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="#">Project name</a>
	        </div>
	        <div id="navbar" className="navbar-collapse collapse">
	          <ul className="nav navbar-nav navbar-right">
	            <li><a href="#">Dashboard</a></li>
	            <li><a href="#">Settings</a></li>
	            <li><a href="#">Profile</a></li>
	            <li><a href="#">Help</a></li>
	          </ul>
	          <form className="navbar-form navbar-right">
	            <input type="text" className="form-control" placeholder="Search..." />
	          </form>
	        </div>
	      </div>
	    </nav>
	    <div className="container-fluid">
	      <div className="row">
	        <div className="col-sm-3 col-md-2 sidebar">
	          <ul className="nav nav-sidebar">
	            <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
	            <li><a href="#">Reports</a></li>
	            <li><a href="#">Analytics</a></li>
	            <li><a href="#">Export</a></li>
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="">Nav item</a></li>
	            <li><a href="">Nav item again</a></li>
	            <li><a href="">One more nav</a></li>
	            <li><a href="">Another nav item</a></li>
	            <li><a href="">More navigation</a></li>
	          </ul>
	          <ul className="nav nav-sidebar">
	            <li><a href="">Nav item again</a></li>
	            <li><a href="">One more nav</a></li>
	            <li><a href="">Another nav item</a></li>
	          </ul>
	        </div>
	        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
	          {this.props.children}
	        </div>
	      </div>
	    </div>
	    </div>);
	}
});

module.exports = Container;