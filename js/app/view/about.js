console.log("SYSTEM: Nav view loading...");

define( function(require) {
  
  // Required modules
  var Backbone       = require('backbone');
  var _              = require('underscore');
  var aboutTemplate  = require('text!template/about.html');

  return Backbone.View.extend({
    
    el : "#subcontent-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      var variables = { searchLabel : "Search:" };
      var template = _.template(aboutTemplate, variables);
      this.$el.html(template);
    }
  });
});