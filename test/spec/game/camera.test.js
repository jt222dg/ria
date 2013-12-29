define(function(require) {
  
  var Camera  = require('game/camera');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/camera", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        

        
      });
      
      env.it('can be instantiated', function() {
        
        
        
      });
      
    });
    
  });
  
});