define(function(require) {
  
  var InputSystem = require('ces/system/input-system');
  var jasmine     = require('jasmine-html');
  var Type        = require('ces/component/helpers/type');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/input-system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(InputSystem).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var inputSystem = new InputSystem();
        this.spec.expect(inputSystem).toBeDefined();
        this.spec.expect(inputSystem instanceof InputSystem).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.inputSystem = new InputSystem();
        
      });
      
      env.afterEach(function() {
        
        this.inputSystem = undefined;
        
      });
      
      env.it('_INPUT_MASK is defined with the right values', function() {
        
        this.spec.expect(this.inputSystem._INPUT_MASK).toBeDefined();
        
        var testMask  = Type.INPUT | Type.PHYSICS | Type.displacement | Type.VELOCITY;
        var inputMask = this.inputSystem._INPUT_MASK;
        
        this.spec.expect((testMask & inputMask) === inputMask).toBeTruthy();
        
      });
      
      env.it('_keys is defined and is an enumerator holiding key values', function() {
      
        this.spec.expect(this.inputSystem._keys).toBeDefined();
        
        this.spec.expect(this.inputSystem._keys.W).toBeDefined();
        this.spec.expect(this.inputSystem._keys.W).toBeFalsy();
        this.spec.expect(this.inputSystem._keys.A).toBeDefined();
        this.spec.expect(this.inputSystem._keys.A).toBeFalsy();
        this.spec.expect(this.inputSystem._keys.S).toBeDefined();
        this.spec.expect(this.inputSystem._keys.S).toBeFalsy();
        this.spec.expect(this.inputSystem._keys.D).toBeDefined();
        this.spec.expect(this.inputSystem._keys.D).toBeFalsy();
        
      });
      
    });
    
    env.describe('general functionality', function() {
    
      env.beforeEach(function() {
        
        this.inputSystem = new InputSystem();
        
      });
      
      env.afterEach(function() {
        
        this.inputSystem = undefined;
        
      });
      
    });
    
  });
  
});