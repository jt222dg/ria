define(function(require) {
  return {
    NONE         : 0,
    DISPLACEMENT : 1 << 0,
    VELOCITY     : 1 << 1,
    APPEARANCE   : 1 << 2,
    PHYSICS      : 1 << 3,
    INPUT        : 1 << 4
  };
});