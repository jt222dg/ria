define(function(require) {
  
  var World = function() {
    this._mask = [];
    
    this._displacement = [];
    this._velocity     = [];
    this._appearance   = [];
    this._physics      = [];
  };
  
  Object.defineProperty(World.prototype, "mask", {
    get: function()     { return this._mask; },
    set: function(mask) { this._mask = mask; }
  });
  
  Object.defineProperty(World.prototype, "displacement", {
    get: function()             { return this._displacement; },
    set: function(displacement) { this._displacement = displacement; }
  });
  
  Object.defineProperty(World.prototype, "velocity", {
    get: function()         { return this._velocity; },
    set: function(velocity) { this._velocity = velocity; }
  });
  
  Object.defineProperty(World.prototype, "appearance", {
    get: function()           { return this._appearance; },
    set: function(appearance) { this._appearance = appearance; }
  });
  
  Object.defineProperty(World.prototype, "physics", {
    get: function()        { return this._physics; },
    set: function(physics) { this._physics = physics; }
  });
  
  return World;
});