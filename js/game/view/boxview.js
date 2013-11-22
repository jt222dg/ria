define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  var $        = require('jquery');
  
  return Backbone.View.extend({
    
    el : $('#canvas'),
    
    defaults : {
      ctx : null
    },
    
    initialize : function() {
      this.setContext();
    },
    
    setContext : function() {
      this.$el = $("#canvas");
      if (this.el !== undefined) {
        this.ctx = this.el.getContext("2d");
      }
    },
    
    render : function() {
      this.ctx.save();
        
      // Use the identity matrix while clearing the canvas
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.el.width, this.el.height);
      
      // Restore the transform
      this.ctx.restore();
        
      var that = this;
      _.each(this.model.models, function(box) {
          that.ctx.fillStyle = "rgb(200,0,0)";
          that.ctx.fillRect (box.get("x"), box.get("y"), box.get("w"), box.get("h"));
      });
    }
  });
});