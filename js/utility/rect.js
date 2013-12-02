define(function(require) {
  var Rect = function(x, y, h, w) {
    this._x = x === undefined ? 0.0 : x;
    this._y = y === undefined ? 0.0 : y;
    this._w = w === undefined ? 0.0 : w;
    this._h = h === undefined ? 0.0 : h;
  };
  
  Object.defineProperty(Rect.prototype, "upper", {
    get: function()  { return this._y; },
    set: function(y) { console.log("Rect.upper : only get functionality implemented."); }
  });
  
  Object.defineProperty(Rect.prototype, "lower", {
    get: function()  { return this._y + this._h; },
    set: function(y) { console.log("Rect.lower : only get functionality implemented."); }
  });
  
  Object.defineProperty(Rect.prototype, "left", {
    get: function()  { return this._x; },
    set: function(y) { console.log("Rect.left : only get functionality implemented."); }
  });
  
  Object.defineProperty(Rect.prototype, "right", {
    get: function()  { return this._x + this._w; },
    set: function(y) { console.log("Rect.right : only get functionality implemented."); }
  });
});