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

"use strict";

module.exports = {
  parseAction: function() {
    var hash = window.location.hash

    if (hash == "" || hash.length == 1) {
      hash = "#collab/index/index"
    }

    hash = hash.substr(1)

    var urlArr = hash.split("?")

    var pathArr = urlArr[0].split("/")

    var queryArr = typeof urlArr[1] == "undefined" ? [] : urlArr[1].split("&")

    var module = typeof pathArr[0] == "undefined" ? "collab" : pathArr.shift()
    var controller = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift()
    var action = typeof pathArr[0] == "undefined" ? "index" : pathArr.shift()
    var args = pathArr

    // console.log(this.module, this.controller, this.action, this.args)

    //loadJS(this.module, this.controller, this.action);
    return {
      module: module,
      controller: controller,
      action: action,
      args: args
    };
  },


  loadJS: function(action) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = "/app/" + action.module + "/" + action.controller + "_" + action.action + ".js";
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
  },


  URL: function() {
    var args = Array.prototype.slice.call(arguments);
    console.log(arguments, args)
  },


  // Form Validation
  formValidate: function(id, resolve, reject) {
    $(id).validate({
      showErrors: function(errorMap, errorList) {
        // Clean up any tooltips for valid elements
        $.each(this.validElements(), function(index, element) {
          var $element = $(element);

          $element.data("title", "") // Clear the title - there is no error associated anymore
            .removeClass("error")
            .tooltip("destroy");

          $element.closest('.form-group').removeClass('has-error');
        });

        // Create new tooltips for invalid elements
        $.each(errorList, function(index, error) {
          var $element = $(error.element);

          $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .data("title", error.message)
            .addClass("error")
            .tooltip(); // Create a new tooltip based on the error messsage we just set in the title

          $element.closest('.form-group').addClass('has-error');
        });
      },
      submitHandler: function(form) {
        var err = "Error.";
        $(form).ajaxSubmit({
          dataType: "json",
          beforeSubmit: function(fdata, jobj, optins) {
            $("#form1 :input").attr("disabled", true);
          },
          success: function(data, textStatus, jqXHR) {
            if (data == null || typeof data.data == "undefined" || typeof data.msg == "undefined") {
              reject(err);
            } else {
              if (data.err && data.err != "") {
                reject(err);
              } else {
                resolve(data);
              }
            }
            $("#form1 :input").removeAttr("disabled");
          },
          error: function(jqXHR, textStatus, errorThrown) {
            reject(err);
            $("#form1 :input").removeAttr("disabled");
          }
        });
      }
    });
  }
};