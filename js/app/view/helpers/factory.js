console.log("SYSTEM: View handler loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  var $        = require('jquery');
  
  var GenericView = require('view/generic-view');
  
  return {
    activeViews : [],
    
    setActive : function(type, view) {
      
      if (view === undefined || !(view instanceof Backbone.View)) {
        return;
      }
      
      this.removeActive(type);
      this.activeViews[type] = view;
      
    },
    
    removeActive : function(type) {
      
      if (this.activeViews[type] === undefined || !(this.activeViews[type] instanceof Backbone.View)) {
        return;
      }
      
      // Remove all events attached to the view
      this.activeViews[type].undelegateEvents();
      this.activeViews[type].$el.removeData().unbind();
      this.activeViews[type] = undefined;
      
    },
    
    changeView : function(type, newView) {
      
      this.setActive(type, newView);
      this.activeViews[type].render();
      
    },
    
    getActiveView : function(type) {
      
      return this.activeViews[type];
      
    },
    
    renderAll : function() {
      
      _.each(this.activeViews, function(view) {
        view.render();
      });
      
    },
    
    getGenericView : function(options) {
      
      if (options === undefined) return null;
      var el       = options.el;
      var template = options.template;
      
      if (el === undefined || template === undefined) return null;
      
      return new GenericView({ el : el, template : template });
      
    },
    
    getNavView : function(options) {
      
      if (options === undefined) return null;
      var el       = options.el;
      var template = options.template;
      
      if (el === undefined || template === undefined) return null;
      
      var NavView = GenericView.extend({

        defaultButton : "index",

        render : function() {
          GenericView.prototype.render.call(this);
          this.activateButton();
        },
        
        events : {
          "click a" : "activateButton"
        },

        activateButton : function(event) {
          var path = this.defaultButton;

          // Used if page is loaded with any fragment
          if (Backbone.history.fragment.length > 0)
            path = Backbone.history.fragment;

          // Prefer instead of fragment since fragment isn't
          // set to the new one. That is because the click event 
          // is run before the page is changed
          if (event)
            path = event.currentTarget.getAttribute("href");

          if (!path.match(/^#/))
            path = '#' + path;

          $('.active').removeClass('active');
          this.$('a[href="' + path + '"]').parent().addClass('active');
        }
      });
      
      return new NavView({ el : el, template : template });
      
    },
    
    getScoresView : function(options) {
      
      if (options === undefined) return null;
      var el       = options.el;
      var template = options.template;
      var model    = options.model;
      
      if (el === undefined || template === undefined || model === undefined) return null;
      
      var ScoresView = GenericView.extend({
        render : function() {
          var variables = { scores : this.model.models };
          var template = _.template(this.template, variables);
          this.$el.html(template);
        }
      });
      
      return new ScoresView({ el : el, template : template, model : model });
      
    },
    
    getGameView : function(options) {
      
      if (options === undefined) return null;
      var el       = options.el;
      var template = options.template;
      var model    = options.model;
      
      if (el === undefined || template === undefined) return null;
      
      var GameView = GenericView.extend({
        initScoreboard : function() {
          $('.jumbotron').empty();
          $('.jumbotron').append("<div id='scoreboard'></div>");
          $('.jumbotron').append("<input type='button' class='btn btn-primary btn-lg' id='start-game-button' value='new game' />");
          $('.jumbotron').append("<div><input type='text' id='name' value ='' placeholder='name...' /></div>");
        }
      });
      
      return new GameView({ el : el, template : template, model : model });
        
    }
    
  };
});