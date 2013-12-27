define(function(require) {
  
  var CollisionSystem = require('ces/system/collision-system');
  var jasmine         = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/collision-system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(CollisionSystem).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var collisionSystem = new CollisionSystem();
        this.spec.expect(collisionSystem).toBeDefined();
        this.spec.expect(collisionSystem instanceof CollisionSystem).toBeTruthy();
        
      });
      
    });
    
  });
  
});