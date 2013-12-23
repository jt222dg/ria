define(function(require) {
  var Color = function(options) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1.0;
    
    if (options !== undefined) {
      this.r = options.r;
      this.g = options.g;
      this.b = options.b;
      this.a = options.a;
    }
  };
  
  Object.defineProperty(Color.prototype, 'r', {
    get : function()  { return this._r; },
    set : function(r) { 
      if (r < 0)   r = 0;
      if (r > 255) r = 255;
      this._r = r;
    }
  });
  
  Object.defineProperty(Color.prototype, 'g', {
    get : function()  { return this._g; },
    set : function(g) {
      if (g < 0)   g = 0;
      if (g > 255) g = 255;
      this._g = g; 
    }
  });
  
  Object.defineProperty(Color.prototype, 'b', {
    get : function()  { return this._b; },
    set : function(b) {
      if (b < 0)   b = 0;
      if (b > 255) b = 255;
      this._b = b;
    }
  });
  
  Object.defineProperty(Color.prototype, 'a', {
    get : function()  { return this._a; },
    set : function(a) {
      if (a < 0.0) a = 0.0;
      if (a > 1.0) a = 1.0;
      this._a = a;
    }
  });
  
  return Color;
});