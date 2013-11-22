console.log("SYSTEM: Info view loading...");

define(function(require) {
  
  // Required modules
  var Backbone     = require('backbone');
  var _            = require('underscore');
  var infoTemplate = require('text!template/info.html');
  
  return Backbone.View.extend({
    
    el : "#subcontent-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      var template = _.template(infoTemplate, {});
      this.$el.html(template);
    }
  });
});