define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var $        = require('jquery');
                 require('utility/base');
                 
  return Backbone.Base.extend({
    defaults : {
      canvas : undefined,
      ctx    : undefined
    },
    
    initialize : function() {
      this.setUpCanvas();
    },
    
    setUpCanvas : function() {
      this.canvas = $('#canvas').get(0);
      if (this.canvas !== undefined) {
        // Set canvas width to css width and rescale canvas height to give the canvas the scale 4:2 width:height
        this.canvas.width  =  this.canvas.offsetWidth;
        this.canvas.height = (this.canvas.offsetWidth / 4) * 2;
        
        this.ctx = this.canvas.getContext("2d");
      }
    },
    
    clearScreen : function() {
      if (this.ctx === undefined) {
        return;
      }
      
      this.ctx.save();
        
      // Use the identity matrix while clearing the canvas
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // Restore the transform
      this.ctx.restore();
    }
  });
});