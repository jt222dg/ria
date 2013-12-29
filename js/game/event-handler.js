define(function(require) {
  
  var Keys = {
    N : false,
    P : false
  };
  
  var EventHandler = function() {
    this._mouseX = 0.0;
    this._mouseY = 0.0;
    
    this.onInit();
  };
  
  EventHandler.prototype.onInit = function() {
    this.mouseX = 0.0;
    this.mouseY = 0.0;
    
    window.addEventListener('keydown', this.onKeyDown, false);
    window.addEventListener('keyup', this.onKeyUp, false);
    window.addEventListener('mousemove', this.onMouseMove, false);
  };
  
  EventHandler.prototype.onCleanUp = function() {
    window.removeEventListener('keydown', this.onKeyDown, false);
    window.removeEventListener('keyup', this.onKeyUp, false);
    window.removeEventListener('mousemove', this.onMouseMove, false);
  };
  
  EventHandler.prototype.onKeyDown = function(event) {
    
    switch (event.keyCode) {
      case 78: Keys.N = !Keys.N; break;
      case 80: Keys.P = !Keys.P; break;
      default: break;
    }
    
  };
  
  EventHandler.prototype.onKeyUp = function(event) {
  };
  
  EventHandler.prototype.onMouseMove = function(event) {
    this._mouseX = event.offsetX;
    this._mouseY = event.offsetY;
  };
  
  EventHandler.prototype.getKeys = function() {
    return Keys;
  };
  
  return EventHandler;
});