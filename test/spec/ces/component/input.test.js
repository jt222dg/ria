define(function(require) {
  
  var Input   = require('ces/component/input');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/input", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Input).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var input = new Input();
        this.spec.expect(input).toBeDefined();
        this.spec.expect(input instanceof Input).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.input = new Input();
        
      });
      
      env.afterEach(function() {
        
        this.input = undefined;
        
      });
      
      env.it('_actions is defined and is an enumerator holiding action values', function() {
      
        this.spec.expect(this.input._actions).toBeDefined();
        this.spec.expect(this.input._actions.MOVING).toBeDefined();
        
        this.spec.expect(this.input._actions.MOVING.UP).toBeDefined();
        this.spec.expect(this.input._actions.MOVING.UP).toBeFalsy();
        
        this.spec.expect(this.input._actions.MOVING.DOWN).toBeDefined();
        this.spec.expect(this.input._actions.MOVING.DOWN).toBeFalsy();
        
        this.spec.expect(this.input._actions.MOVING.LEFT).toBeDefined();
        this.spec.expect(this.input._actions.MOVING.LEFT).toBeFalsy();
        
        this.spec.expect(this.input._actions.MOVING.RIGHT).toBeDefined();
        this.spec.expect(this.input._actions.MOVING.RIGHT).toBeFalsy();
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.beforeEach(function() {
        
        this.input = new Input();
        
      });
      
      env.afterEach(function() {
        
        this.input = undefined;
        
      });
      
      env.it('can get _actions using actions', function() {
        
        var keys = this.input.actions;
        this.spec.expect(keys).toEqual(this.input._actions);
        
      });
      
      env.it('can not set _actions using actions', function() {
        
        this.input.actions = undefined;
        this.spec.expect(this.input._actions).toBeDefined();
        
      });
      
    });
    
  });
  
});