define(function(require) {
  
  var Displacement = require('ces/component/displacement');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/displacement", function() {
    env.beforeEach(function() {
      this.displacement = new Displacement();
      this.spec         = env.currentSpec;
    });
    
    env.afterEach(function() {
      this.displacement = undefined;
    });
    
    env.describe('Initialization', function() {
      env.it('should be defined', function() {
        this.spec.expect(this.displacement).toBeDefined();
      });
      
      env.it('x should be 0', function() {
        this.spec.expect(this.displacement.x).toEqual(0);
      });
      
      env.it('y should be 0', function() {
        this.spec.expect(this.displacement.y).toEqual(0);
      });
    });
    
    env.describe('Setting values', function() {
      env.it('x should be 5.5', function() {
        this.displacement.x = 5.5;
        this.spec.expect(this.displacement.x).toEqual(5.5);
      });
      
      env.it('x should be -135.25', function() {
        this.displacement.x = -135.25;
        this.spec.expect(this.displacement.x).toEqual(-135.25);
      });
      
      env.it('y should be to 99.999', function() {
        this.displacement.y = 99.999;
        this.spec.expect(this.displacement.y).toEqual(99.999);
      });
      
      env.it('y should be -0.001', function() {
        this.displacement.y = -0.001;
        this.spec.expect(this.displacement.y).toEqual(-0.001);
      });
    });
    
    env.describe('Incrementing values', function() {
      env.it('x should increase from 9 to 10', function() {
        this.displacement.x = 9;
        this.displacement.x += 1;
        this.spec.expect(this.displacement.x).toEqual(10);
      });
      
      env.it('y should decrease from -1 to -2', function() {
        this.displacement.y = -1;
        this.displacement.y -= 1;
        this.spec.expect(this.displacement.y).toEqual(-2);
      });
    });
  });
});