console.log("SYSTEM: Game view loading...");

define(function(require) {
  
  var Backbone     = require('backbone');
  var _            = require('underscore');
  var gameTemplate = require('text!template/game.html');
  
  return Backbone.View.extend({
    
    el : "#subcontent-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
    
    render : function() {
      var template = _.template(gameTemplate, {});
      this.$el.html(template);
    }
  });
});