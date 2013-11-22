console.log("SYSTEM: Content view loading...");

define(function(require) {
  
  // Required modules
  var Backbone        = require('backbone');
  var _               = require('underscore');
  var $               = require('jquery');
  var contentTemplate = require('text!template/content.html');
  
  return Backbone.View.extend({
    
    el : "#content-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      
      var variables = { searchLabel : "Search:" };
      var template = _.template(contentTemplate, variables);
      this.$el.html(template);
    }
    
  });
});