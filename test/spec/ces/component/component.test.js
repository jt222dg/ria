define(function(require) {
  
  var Component    = require('ces/component/component');
  var jasmine      = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/component", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Component).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var component = new Component();
        this.spec.expect(component).toBeDefined();
        this.spec.expect(component instanceof Component).toBeTruthy();
        
      });
      
    });
    
  });
  
});