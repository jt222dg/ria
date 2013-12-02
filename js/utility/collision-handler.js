define(function(require) {
  
  // Required modules
  var $ = require('jquery');
  var Rect = require('utility/rect');
  
  var CollisionHandler = function() {
    this.onInit();
  };
  
  CollisionHandler.prototype.onInit = function() {
    this.canvas = $('#canvas').get(0);
    if (this.canvas !== undefined) {
      
      // Set canvas width to css width and rescale canvas height to give the canvas the scale 4:2 width:height
      this.canvas.width  =  this.canvas.offsetWidth;
      this.canvas.height = (this.canvas.offsetWidth / 4) * 2;
      
      this.ctx = this.canvas.getContext("2d");
    }
  };
  
  CollisionHandler.prototype.onCollision = function(rectA, rectB) {
    if (!(rectA instanceof Rect) || !(rectB instanceof Rect)) {
      return false;
    }
      
    return (
      rectA.right > rectB.left  &&
      rectA.left  < rectB.right &&
      rectA.upper > rectB.lower &&
      rectA.lower < rectB.upper
    );
  };
  
  return CollisionHandler;
});