define(function(require) {
  
  var RenderSystem = require('ces/system/render-system');
  var jasmine        = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/render-system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(RenderSystem).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var renderSystem = new RenderSystem();
        this.spec.expect(renderSystem).toBeDefined();
        this.spec.expect(renderSystem instanceof RenderSystem).toBeTruthy();
        
      });
      
    });
    
  });
  
});