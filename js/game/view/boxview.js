define(function(require) {
  
  // Required modules
  var Class    = require('utility/class');
  var _        = require('underscore');
  var $        = require('jquery');
  
  return Class.extend({
    init : function(model) {
      this.model = model;
      this.setContext();
    },
    
    setContext : function() {
      var canvas = $('#canvas').get(0);
      if (canvas !== undefined) {
        this.ctx = canvas.getContext("2d");
      }
    },
    
    render : function() {
      
      _.each(this.model.models, function(box) {
          this.ctx.fillStyle = "rgb(200,0,0)";
          this.ctx.fillRect (box.getX(), box.getY(), box.getW(), box.getH());
      }, this);
    }
  });
});