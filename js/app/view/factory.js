console.log("SYSTEM: View handler loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  
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
    }
  };
});