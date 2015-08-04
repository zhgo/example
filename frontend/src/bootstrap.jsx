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
var zhgo = new function () {
  this.module = "";
  this.controller = "";
  this.action = "";
  this.args = "";

  this.load = function() {
    var hash = window.location.hash

    if(hash == "" || hash.length == 1){
        hash = "#collab/index/index"
    }

    hash = hash.substr(1)

    var urlArr = hash.split("?")

    var pathArr = urlArr[0].split("/")

    var queryArr = typeof urlArr[1] == "undefined" ? [] : urlArr[1].split("&")

    this.module = typeof pathArr[0] == "undefined" ? "collab" : pathArr.shift()
    this.controller = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift()
    this.action = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift()
    this.args = pathArr

    // console.log(this.module, this.controller, this.action, this.args)

    loadJS(this.module, this.controller, this.action);
  };
};

window.onhashchange = function() {
  zhgo.load();
};

function loadJS(m, c, a) {
  // DOM: Create the script element
  var jsElm = document.createElement("script");
  // set the type attribute
  jsElm.type = "application/javascript";
  // make the script element load file
  jsElm.src = "/app/"+m+"/"+c+"_"+a+".js";
  // finally insert the element to the body element in order to load the script
  document.body.appendChild(jsElm);
}

// var u = URL(module, controller, action, args)
function URL(){
  var args = Array.prototype.slice.call(arguments);
  console.log(arguments, args)
}

zhgo.load();
