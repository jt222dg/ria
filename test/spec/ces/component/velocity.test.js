define(function(require) {
  
  var Velocity = require('ces/component/velocity');
  var jasmine  = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/velocity", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Velocity).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var velocity = new Velocity();
        this.spec.expect(velocity).toBeDefined();
        this.spec.expect(velocity instanceof Velocity).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.velocity = new Velocity();
        
      });
      
      env.afterEach(function() {
        
        this.velocity = undefined;
        
      });
      
      env.it('_x is defined and set to 0.0', function() {
      
        this.expect(this.velocity._x).toBeDefined();
        this.expect(this.velocity._x).toEqual(0.0);
        
      });
      
      env.it('_y is defined and set to 0.0', function() {
      
        this.expect(this.velocity._y).toBeDefined();
        this.expect(this.velocity._y).toEqual(0.0);
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.describe('getting and setting values', function() {
      
        env.beforeEach(function() {
          
          this.velocity = new Velocity();
          
        });
        
        env.afterEach(function() {
          
          this.velocity = undefined;
          
        });
        
        env.it('can set _x using x', function() {
        
          this.velocity.x = 16.32;
          this.expect(this.velocity._x).toEqual(16.32);
          
        });
      
        env.it('can get _x using x', function() {
        
          this.velocity._x = -99.43;
          this.expect(this.velocity.x).toEqual(-99.43);
          
        });
        
        env.it('can set _y using y', function() {
        
          this.velocity.y = 40;
          this.expect(this.velocity._y).toEqual(40);
          
        });
      
        env.it('can get _y using y', function() {
        
          this.velocity._y = -0.01;
          this.expect(this.velocity.y).toEqual(-0.01);
          
        });
        
      });
      
      env.describe('incrementing values', function() {
      
        env.beforeEach(function() {
          
          this.velocity = new Velocity();
          
        });
        
        env.afterEach(function() {
          
          this.velocity = undefined;
          
        });
        
        env.it('incrementing _x using x', function() {
        
          this.velocity.x = 15;
          
          this.velocity.x += 0.3;
          this.spec.expect(this.velocity.x).toEqual(15.3);
          
          this.velocity.x += 2.4;
          this.spec.expect(this.velocity.x).toEqual(17.7);
          
        });
        
        env.it('decrementing _y using y', function() {
        
          this.velocity.y = 9;
          
          this.velocity.y -= 0.5;
          this.spec.expect(this.velocity.y).toEqual(8.5);
          
          this.velocity.y -= 1.0;
          this.spec.expect(this.velocity.y).toEqual(7.5);
          
        });
        
      });
      
    });
    
  });
  
});