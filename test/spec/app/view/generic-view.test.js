define(function(require) {
  
  var GenericView = require('view/generic-view');
  var jasmine     = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/view/generic-view", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('definition and instantiation', function() {
      
      env.it('Is defined', function() {
        
        this.spec.expect(GenericView).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var genericView = new GenericView();
        this.spec.expect(genericView).not.toBeNull();
        
      });
      
    });
    
    env.describe('new instance default values', function() {
      
      env.beforeEach(function() {
        
        this.genericView  = new GenericView();
        
      });
      
      env.afterEach(function() {
        
        this.genericView  = undefined;
        
      });
      
      env.it('template is undefined', function() {
        
        this.spec.expect(this.genericView.template).toBeUndefined();
        
      });
      
      env.it('el is an instance of HTMLDivElement', function() {
        
        this.spec.expect(this.genericView.el instanceof HTMLDivElement).toBeTruthy();
        
      });
      
    });
    
    env.describe('DOM-related functionality', function() {
      
      env.beforeEach(function() {
        
        this.genericView  = new GenericView();
        this.mockTemplate = "a mocked html template";
        this.mockElement  = "#mock";
        this.mockContext  = document.createElement("div");
        this.mockContext.id = "mock";
      });
      
      env.afterEach(function() {
        
        this.genericView  = undefined;
        this.mocktempalte = undefined;
        
      });
      
      env.it('template is initialized using onInit', function() {
        
        this.genericView.onInit({ template : this.mockTemplate });
        this.spec.expect(this.genericView.template).toEqual(this.mockTemplate);
        
      });
      
      env.it('el is initialized using onInit', function() {
        
        this.genericView.onInit({ el : this.mockElement });
        this.spec.expect(this.genericView.el).toEqual(this.mockElement);
        
      });
      
      env.it('fails when trying to render without a template', function() {
        
        this.genericView.onInit({ el : this.mockElement });
        this.genericView.render();
        
        this.spec.expect(this.genericView.$el[0].innerText).toEqual("");
        
      });
      
      env.it('rendering template to $el using render()', function() {
        
        this.genericView.onInit({ el : this.mockElement, template : this.mockTemplate });
        
        var that = this;
        this.spec.spyOn(this.genericView, 'render').andCallFake(function() {
          that.mockContext.appendChild(document.createTextNode(that.mockTemplate));
          this.el = that.mockContext.innerText;
        });
        
        this.genericView.render();
        
        this.spec.expect(this.genericView.render).toHaveBeenCalled();
        this.spec.expect(this.genericView.el).toEqual(this.mockTemplate);

      });
      
    })
  });
});