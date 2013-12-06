console.log("SYSTEM: Score view loading...");

define(function(require) {
  
  // Required modules
  var Backbone        = require('backbone');
  var _               = require('underscore');
  var $               = require('jquery');
  var contentTemplate = require('text!template/score.html');
  
  return Backbone.View.extend({
    
    el : "#subcontent-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      var variables = { scores : this.model.models };
      var template = _.template(contentTemplate, variables);
      this.$el.html(template);
    }
    
  });
});