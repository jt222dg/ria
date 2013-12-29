define(function(require) {
  
  var Controls = require('ces/component/controls');
  var jasmine  = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/controls", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Controls).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var controls = new Controls();
        this.spec.expect(controls).toBeDefined();
        this.spec.expect(controls instanceof Controls).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.controls = new Controls();
        
      });
      
      env.afterEach(function() {
        
        this.controls = undefined;
        
      });
      
      env.it('_actions is defined and is an enumerator holiding action values', function() {
      
        this.spec.expect(this.controls._actions).toBeDefined();
        this.spec.expect(this.controls._actions.MOVING).toBeDefined();
        
        this.spec.expect(this.controls._actions.MOVING.UP).toBeDefined();
        this.spec.expect(this.controls._actions.MOVING.UP).toBeFalsy();
        
        this.spec.expect(this.controls._actions.MOVING.DOWN).toBeDefined();
        this.spec.expect(this.controls._actions.MOVING.DOWN).toBeFalsy();
        
        this.spec.expect(this.controls._actions.MOVING.LEFT).toBeDefined();
        this.spec.expect(this.controls._actions.MOVING.LEFT).toBeFalsy();
        
        this.spec.expect(this.controls._actions.MOVING.RIGHT).toBeDefined();
        this.spec.expect(this.controls._actions.MOVING.RIGHT).toBeFalsy();
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.beforeEach(function() {
        
        this.controls = new Controls();
        
      });
      
      env.afterEach(function() {
        
        this.controls = undefined;
        
      });
      
      env.it('can get _actions using actions', function() {
        
        var actions = this.controls.actions;
        this.spec.expect(actions).toEqual(this.controls._actions);
        
      });
      
      env.it('can not set _actions using actions', function() {
        
        this.controls.actions = undefined;
        this.spec.expect(this.controls._actions).toBeDefined();
        
      });
      
    });
    
  });
  
});