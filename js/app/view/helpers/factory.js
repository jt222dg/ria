console.log("SYSTEM: View handler loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  var $        = require('jquery');
  
  var GenericView = require('view/generic-view');
  
  return {
    _activeViews : [],
    
    setActive : function(type, view) {
      if (view === undefined || !(view instanceof Backbone.View)) {
        return;
      }
      
      this.removeActive(type);
      this._activeViews[type] = view;
    },
    
    removeActive : function(type) {
      if (this._activeViews[type] === undefined || !(this._activeViews[type] instanceof Backbone.View)) {
        return;
      }
      
      // Remove all events attached to the view
      this._activeViews[type].undelegateEvents();
      this._activeViews[type].$el.removeData().unbind();
      this._activeViews[type] = null;
    },
    
    changeView : function(type, newView) {
      this.setActive(type, newView);
      this._activeViews[type].render();
    },
    
    getActiveView : function(type) {
      return this._activeViews[type];
    },
    
    renderAll : function() {
      _.each(this._activeViews, function(view) {
        view.render();
      });
    },
    
    getNavView : function(options) {
      var NavView = GenericView.extend({
        render : function() {
          GenericView.prototype.render.call(this);
          
          switch (Backbone.history.fragment) {
            case "index"  : this.activateHomeButton();   break;
            case "game"   : this.activateGameButton();   break;
            case "about"  : this.activateAboutButton();  break;
            case "scores" : this.activateScoresButton(); break;
            default       : this.activateHomeButton();   break;
          }
        },
        
        events : {
          "click #home"   : "activateHomeButton",
          "click #game"   : "activateGameButton",
          "click #about"  : "activateAboutButton",
          "click #scores" : "activateScoresButton"
        },
        
        activateHomeButton : function(event) {
          $('.active').removeClass('active');
          $('#home').parent().addClass('active');
        },
        
        activateGameButton : function(event) {
          $('.active').removeClass('active');
          $('#game').parent().addClass('active');
        },
        
        activateAboutButton : function(event) {
          $('.active').removeClass('active');
          $('#about').parent().addClass('active');
        },
        
        activateScoresButton : function(event) {
          $('.active').removeClass('active');
          $('#scores').parent().addClass('active');
        }
      });
      
      var el       = options.el;
      var template = options.template;
      
      return new NavView({ el : el, template : template});
    },
    
    getScoresView : function(options) {
      var ScoresView = GenericView.extend({
        render : function() {
          var variables = { scores : this.model.models };
          var template = _.template(this.template, variables);
          this.$el.html(template);
        }
      });
    
      var el       = options.el;
      var template = options.template;
      var model    = options.model;
      
      return new ScoresView({ el : el, template : template, model : model });
    }
  };
});