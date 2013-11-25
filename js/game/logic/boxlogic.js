define(function(require) {
  
  // Required modules
  var Class = require('utility/class');
  var _     = require('underscore');
  
  // Logic related variables
  var xVelocity = -30.0;
  
  return Class.extend({
    init : function(models) {
      this.models = models;
    },
    
    update : function(delta) {
      _.each(this.models, function(box) {
        box.setX(box.getX()+(xVelocity*delta));
      });
    },
    
    addBox : function(box) {
      this.models.push(box);
    }
  });
});