console.log("SYSTEM: Scores module loading...");

define(function(require) {
  var Backbone = require('backbone');
  var Score    = require('model/score');
  
  return Backbone.Collection.extend({
    model : Score,
    
    initialize : function() {
    }
  });
});