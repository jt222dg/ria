define(function(require) {
  
  var Appearance = require('ces/component/appearance');
  var Color      = require('ces/component/helpers/color');
  var jasmine    = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/appearance", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('Initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Appearance).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var appearance = new Appearance();
        this.spec.expect(appearance).toBeDefined();
        this.spec.expect(appearance instanceof Appearance).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.appearance = new Appearance();
        
      });
      
      env.afterEach(function() {
      
        this.appearance = undefined;
        
      });
      
      env.it('_color rgba(r,g,b,a) is defined and set to rgba(0,0,0,0)', function() {
        
        this.spec.expect(this.appearance._color.r).toBeDefined();
        this.spec.expect(this.appearance._color.r).toEqual(0);
        this.spec.expect(this.appearance._color.g).toBeDefined();
        this.spec.expect(this.appearance._color.g).toEqual(0);
        this.spec.expect(this.appearance._color.b).toBeDefined();
        this.spec.expect(this.appearance._color.b).toEqual(0);
        
      });
      
    });
    
    env.describe('using properties', function() {
    
      env.beforeEach(function() {
        
        this.appearance = new Appearance();
        
      });
      
      env.afterEach(function() {
      
        this.appearance = undefined;
        
      });
      
      env.describe('getting and setting values', function() {
        
        env.it('can set _color using color', function() {
          
          this.appearance.color = new Color({ r : 50, g : 100, b : 150, a : 0.5 });
          
          this.spec.expect(this.appearance._color.r).toEqual(50);
          this.spec.expect(this.appearance._color.g).toEqual(100);
          this.spec.expect(this.appearance._color.b).toEqual(150);
          this.spec.expect(this.appearance._color.a).toEqual(0.5);
          
        });
        
        env.it('can get _color using color', function() {
          
          this.appearance._color = new Color({ r : 50, g : 100, b : 150, a : 0.5 });
          
          this.spec.expect(this.appearance.color.r).toEqual(50);
          this.spec.expect(this.appearance.color.g).toEqual(100);
          this.spec.expect(this.appearance.color.b).toEqual(150);
          this.spec.expect(this.appearance.color.a).toEqual(0.5);
          
        });
        
        env.it('_color.rgb values are kept in the range of 0 to 255 using color', function() {
          
          this.appearance.color = new Color({ r : -0.1, g : -255, b : 999, a : 0.0 });
          
          this.spec.expect(this.appearance.color.r).toEqual(0);
          this.spec.expect(this.appearance.color.g).toEqual(0);
          this.spec.expect(this.appearance.color.b).toEqual(255);
          
        });
        
        env.it('_color.a value is kept in the range of 0.0 to 1.0  using color', function() {
          
          this.appearance.color = new Color({ r : 0, g : 0, b : 0, a : 2.0 });
          this.spec.expect(this.appearance.color.a).toEqual(1.0);
          
          this.appearance.color = new Color({ r : 0, g : 0, b : 0, a : -1.0 });
          this.spec.expect(this.appearance.color.a).toEqual(0.0);
          
        });
        
        env.it('can set and get induvidual _color values using color property', function() {
          
          this.appearance.color.r = 50;
          this.appearance.color.g = 100;
          this.appearance.color.b = 150;
          this.appearance.color.a = 1;
          
          this.spec.expect(this.appearance._color.r).toEqual(50);
          this.spec.expect(this.appearance._color.g).toEqual(100);
          this.spec.expect(this.appearance._color.b).toEqual(150);
          this.spec.expect(this.appearance._color.a).toEqual(1);
          
        });
        
        env.it('_color.rgb values are kept in the range of 0 to 255  using color', function() {
          
          this.appearance.color.r = -1;
          this.appearance.color.g = 999;
          this.appearance.color.b = 256;
          
          this.spec.expect(this.appearance._color.r).toEqual(0);
          this.spec.expect(this.appearance._color.g).toEqual(255);
          this.spec.expect(this.appearance._color.b).toEqual(255);
          
        });
        
        env.it('_color.a value is kept in the range of 0.0 to 1.0  using color', function() {
          
          this.appearance.color.a = 1.1;
          this.spec.expect(this.appearance.color.a).toEqual(1.0);
          
          this.appearance.color.a = -1.1;
          this.spec.expect(this.appearance.color.a).toEqual(0.0);
          
        });
          
      });
      
    });
    
    env.describe('other functionality', function() {
        
      env.beforeEach(function() {
        
        this.appearance = new Appearance();
        
      });
      
      env.afterEach(function() {
      
        this.appearance = undefined;
        
      });
    
      env.it('toString returns color in the correct format', function() {
        
        var correctFormat = "rgba(0,0,0,1)";
        this.spec.expect(this.appearance.toString()).toEqual(correctFormat);
        
      });
        
    });
    
  });
  
});