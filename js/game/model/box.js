define(function(require) {
  
  // Required modules
  var Class = require('utility/class');
  
  return Class.extend({
    init : function(x, y) {
      this.x = x;
      this.y = y;
      this.w = 10.0;
      this.h = 10.0;
    },
    
    setX : function(x) { this.x = x; },
    setY : function(y) { this.y = y; },
    
    getX : function() { return this.x; },
    getY : function() { return this.y; },
    getW : function() { return this.w; },
    getH : function() { return this.h; }
  });
});