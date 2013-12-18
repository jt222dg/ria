define(function(require) {
  
  var GenericView = require('view/generic-view');
  var jasmine     = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/view/about", function() {
    
    env.beforeEach(function () {
      this.spec        = env.currentSpec;
      this.genericView = new GenericView();
      
      this.mockData = {
        template : "this is a html template",
      }
    });
    
    env.describe('Initialization', function() {
      env.it('is defined', function() {
        this.spec.expect(this.genericView).toBeDefined();
      });
      
      env.it('template is undefined', function() {
        this.spec.expect(this.genericView.template).toBeUndefined();
      });
      
      env.it('template is initialized using onInit', function() {
        this.genericView.onInit({ template : this.mockData.template });
        this.spec.expect(this.genericView.template).toEqual(this.mockData.template);
      });
    });
    
    env.afterEach(function() {
      this.genericView = undefined;
    });
  });
});