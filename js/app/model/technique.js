console.log("SYSTEM: Technique module loading...");

define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults : {
      name        : 'new technique',
      description : 'empty'
    },
    
    initialize : function() {
      
    }
  });
});