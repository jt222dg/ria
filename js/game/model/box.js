define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  
  return Backbone.Model.extend({
    defaults : {
      x : 0.0,
      y : 0.0,
      w : 10.0,
      h : 10.0
    },
    
    initialize : function() {
    }
  });
});