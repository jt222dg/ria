define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  var Box      = require('game/model/box');
  
  // Logic related variables
  var xVelocity = 30.0;
  
  return Backbone.Collection.extend({
    model : Box,
    
    initialize : function() {
      console.log(this.models);
    },
    
    update : function(delta) {
      
      _.each(this.models, function(box) {
        box.set("x", box.get("x")+(xVelocity*delta));
      });
    }
  });
});