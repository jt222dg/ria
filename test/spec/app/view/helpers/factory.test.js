define(function(require) {
  
  var Factory     = require('view/helpers/factory');
  var Backbone    = require('backbone');
  var jasmine     = require('jasmine-html');
  var GenericView = require('view/generic-view');
  
  var env      = jasmine.getEnv();
  var MockView = Backbone.View.extend({
    render : function() {
    }
  });
        
  return env.describe("app/view/helpers/factory", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('definition', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Factory).toBeDefined();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.it('activeViews is an empty array', function() {
        
        this.spec.expect(Factory.activeViews instanceof Array).toBeTruthy();
        this.spec.expect(Factory.activeViews.length).toEqual(0);
        
      });
      
    });
    
    env.describe('helper functions', function() {
      
      env.beforeEach(function() {
        
        this.mockViewType = 1;
        this.mockView = new MockView();
        
      });
      
      env.afterEach(function() {
        
        this.mockViewType = undefined;
        this.mockView     = undefined;
        
      });
    
      env.describe('setActive()', function() {
      
        env.it('an active view is not set when passing in undefined', function() {
          
          Factory.setActive(this.mockViewType);
          this.spec.expect(Factory.activeViews[this.mockViewType]).toBeUndefined();
          
        });
        
        env.it('removeActive is called with viewType as only argument', function() {
          
          this.spec.spyOn(Factory, 'removeActive');
          Factory.setActive(this.mockViewType, this.mockView);
          this.spec.expect(Factory.removeActive).toHaveBeenCalledWith(this.mockViewType);
          
        });
        
        env.it('an active view is set', function() {
          
          Factory.setActive(this.mockViewType, this.mockView);
          this.spec.expect(Factory.activeViews[this.mockViewType]).toEqual(this.mockView);
          
        });
        
      });
      
      env.describe('removeActive()', function() {
        
        env.it('nothing happens if the view isnt set', function() {
          
          Factory.removeActive(this.mockViewType);
          this.spec.expect(Factory.activeViews[this.mockViewType]).toBeUndefined();
          
        });
        
        env.it('an active view is removed', function() {
          
          Factory.setActive(this.mockViewType, this.mockView);
          this.spec.expect(Factory.activeViews[this.mockViewType]).toEqual(this.mockView);
          
          Factory.removeActive(this.mockViewType);
          this.spec.expect(Factory.activeViews[this.mockViewType]).toBeUndefined();
          
        });
      
      });
      
      env.describe('events unbinding', function() {
        
        env.beforeEach(function() {
          
          this.mockView.events = {
            "click #test"   : "onEvent"
          };
          
          this.mockView.onEvent = function(event) {
          }
          
        });
        
        env.it('removeActive() calls activeView[viewType].undelegateEvents()', function() {
          
          this.spec.spyOn(this.mockView, 'undelegateEvents');
          
          Factory.setActive(this.mockViewType, this.mockView);
          Factory.removeActive(this.mockViewType);
          
          this.spec.expect(this.mockView.undelegateEvents).toHaveBeenCalled();
          
        });
        
      });
      
      env.describe('changeView()', function() {
        
        env.it('calls setActive with activeView and viewType', function() {

          this.spec.spyOn(Factory, 'setActive').andCallFake(function() {
          });
          
          this.spec.spyOn(Factory, 'changeView').andCallFake(function(type, view) {
            Factory.setActive(type, view);
          });
          
          Factory.changeView(this.mockViewType, this.mockView);
          this.spec.expect(Factory.setActive).toHaveBeenCalledWith(this.mockViewType, this.mockView);
          
        });
        
        env.it('calls activeView[viewType].render()', function() {
          
          this.spec.spyOn(this.mockView, 'render');
          Factory.changeView(this.mockViewType, this.mockView);
          this.spec.expect(this.mockView.render).toHaveBeenCalled();
          
        });
        
      });
      
      env.describe('getActiveView(type)', function() {
        
        env.it('trying to get a undefined view returns undefined', function() {
        
          var undefinedIndex = 999;
          var returnedView = Factory.getActiveView(undefinedIndex);
          
          this.spec.expect(returnedView).toBeUndefined();
          
        });
        
        env.it('the active view of type [type] is returned', function() {
        
          Factory.setActive(this.mockViewType, this.mockView);
          var returnedView = Factory.getActiveView(this.mockViewType);
          
          this.spec.expect(returnedView).toEqual(this.mockView);
          
        });
        
      });
      
      env.describe('renderAll()', function() {
        
        env.beforeEach(function() {
          
          this.mockViewTwo = new MockView();
          
        });
        
        env.afterEach(function() {
          
          this.mockViewTwo = undefined;
          
        });
        
        env.it('calls render() of all active views', function() {
 
          this.spec.spyOn(this.mockView, 'render');
          this.spec.spyOn(this.mockViewTwo, 'render');
          
          Factory.setActive(this.mockViewType, this.mockView);
          Factory.setActive(this.mockViewType+1, this.mockViewTwo);
          
          Factory.renderAll();
          
          this.spec.expect(this.mockView.render).toHaveBeenCalled();
          this.spec.expect(this.mockViewTwo.render).toHaveBeenCalled();

        });
        
      });
      
    })
    
    env.describe('view generation', function() {
      
      env.beforeEach(function() {
        
        this.mockOptions = {
          el       : "#mockEl",
          template : "<div>mock tempalte</div>"
        };
        
      });
      
      env.afterEach(function() {
        
        this.mockOptions = undefined;
        
      });
      
      env.describe('getGenericView', function() {
        
        env.it('returns null if no options are passed in', function() {
          
          this.spec.expect(Factory.getGenericView()).toBeNull();
          
        });
        
        env.it('returns null if option parameters does not contain el or template info', function() {
          
          this.spec.expect(Factory.getGenericView({})).toBeNull();
          
        });
        
        env.it('generates an instance of GenericView', function() {
          
          this.spec.expect(Factory.getGenericView(this.mockOptions) instanceof GenericView).toBeTruthy();
          
        });
        
      });
      
      env.describe('getNavView', function() {
        
        env.it('returns null if no options are passed in', function() {
          
          this.spec.expect(Factory.getNavView()).toBeNull();
          
        });
        
        env.it('returns null if option parameters does not contain el or template info', function() {
          
          this.spec.expect(Factory.getNavView({})).toBeNull();
          
        });
        
        env.it('generates an instance of GenericView', function() {
          
          this.spec.expect(Factory.getNavView(this.mockOptions) instanceof GenericView).toBeTruthy();
          
        });

      });
      
      env.describe('getScoresView', function() {
      
        env.it('returns null if no options are passed in', function() {
          
          this.spec.expect(Factory.getScoresView()).toBeNull();
          
        });
        
        env.it('returns null if option parameters does not contain el, template or model info', function() {
          
          this.spec.expect(Factory.getScoresView({})).toBeNull();
          
        });
        
        env.it('generates an instance of GenericView', function() {
          
          this.mockOptions.model = {};
          this.spec.expect(Factory.getScoresView(this.mockOptions) instanceof GenericView).toBeTruthy();
          
        });
      
      });
      
    });
    
  });
  
});