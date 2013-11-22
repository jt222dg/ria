console.log("SYSTEM: Footer view loading...");

define(function(require) {
  
  // Required modules
  var Backbone        = require('backbone');
  var _               = require('underscore');
  var footerTemplate  = require('text!template/footer.html');
  
  return Backbone.View.extend({
    
    el : "#footer-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      var variables = { searchLabel : "Search:" };
      var template = _.template(footerTemplate, variables);
      this.$el.html(template);
    }
  });
});