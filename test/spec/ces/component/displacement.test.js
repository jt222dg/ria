define(function(require) {
  
  var Displacement = require('ces/component/displacement');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/displacement", function() {
    env.beforeEach(function () {
      this.displacement = new Displacement();
      this.spec = env.currentSpec;
    });
    
    env.describe('Initialization', function() {
      env.it('Name should be empty', function() {
        this.spec.expect(this.displacement.x).toEqual(0);
      });
    });
  });
});