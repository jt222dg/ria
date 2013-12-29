define(function(require) {
  
  var World = function() {
    this._mask = [];
    
    this._displacement = [];
    this._velocity     = [];
    this._appearance   = [];
    this._physics      = [];
    this._controls     = [];
  };
  
  Object.defineProperty(World.prototype, "mask", {
    get: function()     { return this._mask; },
    set: function(mask) { }
  });
  
  Object.defineProperty(World.prototype, "displacement", {
    get: function()             { return this._displacement; },
    set: function(displacement) { }
  });
  
  Object.defineProperty(World.prototype, "velocity", {
    get: function()         { return this._velocity; },
    set: function(velocity) { }
  });
  
  Object.defineProperty(World.prototype, "appearance", {
    get: function()           { return this._appearance; },
    set: function(appearance) { }
  });
  
  Object.defineProperty(World.prototype, "physics", {
    get: function()        { return this._physics; },
    set: function(physics) { }
  });
  
  Object.defineProperty(World.prototype, "controls", {
    get: function()        { return this._controls; },
    set: function(controls) { }
  });
  
  return World;
});