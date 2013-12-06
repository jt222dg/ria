console.log("SYSTEM: Score module loading...");

define(function(require) {
  var Backbone = require('backbone');
  
  return Backbone.Model.extend({
    defaults : {
      name        : '',
      amount      : 0
    },
    
    initialize : function() {
      
    }
  });
});