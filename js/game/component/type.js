define(function(require) {
  return {
    COMPONENT_NONE         : 0,
    COMPONENT_DISPLACEMENT : 1 << 0,
    COMPONENT_VELOCITY     : 1 << 1,
    COMPONENT_APPEARANCE   : 1 << 2,
    COMPONENT_PHYSICS      : 1 << 3
  };
});