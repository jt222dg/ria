console.log("SYSTEM: View handler loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  
  // Array of different active views
  var activeViews = [];

  return {
    setActive : function(type, view) {
      if (view === undefined || !(view instanceof Backbone.View)) {
        return;
      }
      
      this.removeActive(type);
      activeViews[type] = view;
    },
    
    removeActive : function(type) {
      if (activeViews[type] === undefined || !(activeViews[type] instanceof Backbone.View)) {
        return;
      }
      
      // Remove all events attached to the view
      activeViews[type].undelegateEvents();
      activeViews[type].$el.removeData().unbind();
      activeViews[type] = null;
    },
    
    changeView : function(type, newView) {
      
      this.setActive(type, newView);
      activeViews[type].render();
      
    },
    
    getActiveView : function(type) {
      return activeViews[type];
    },
    
    renderAll : function() {
      _.each(activeViews, function(view) {
        view.render();
      });
    }
  };
});