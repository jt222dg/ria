define(function(require) {
  
  var System  = require('ces/system/system');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('Initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(System).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var system = new System();
        this.spec.expect(system).toBeDefined();
        this.spec.expect(system instanceof System).toBeTruthy();
        
      });
      
    });
    
  });
  
});