console.log("SYSTEM: View handler loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var _        = require('underscore');
  
  // View enum
  var ViewType = {
    CONTENT    : 0,
    MAIN       : 1,
    NAV        : 2,
    FOOTER     : 3,
    SUBCONTENT : 4
  };
  
  var activeViews = [];

  return {
    setActive : function(type, view) {
      if (view === undefined || !(view instanceof Backbone.View)) {
        return;
      }
      
      console.log("SYSTEM: closing view...");
      
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

      // Remove view from DOM
      // activeViews[type].remove();  
      // Backbone.View.prototype.remove.call(activeViews[type]);
      activeViews[type] = null;
    },
  
    changeContent : function(newContentView) {
      this.setActive(ViewType.CONTENT, newContentView);
      activeViews[ViewType.CONTENT].render();
    },
    
    changeSubContent : function(newSubContentView) {
      this.setActive(ViewType.SUBCONTENT, newSubContentView);
      activeViews[ViewType.SUBCONTENT].render();
    },
    
    changeMain : function(newMainView) {
      this.setActive(ViewType.MAIN, newMainView);
      activeViews[ViewType.MAIN].render();
    },
    
    changeNav : function(newNavView) {
      this.setActive(ViewType.NAV, newNavView);
      activeViews[ViewType.NAV].render();
    },
    
    changeFooter : function(newFooterView) {
      this.setActive(ViewType.FOOTER, newFooterView);
      activeViews[ViewType.FOOTER].render();
    },
    
    getActiveContent : function() {
      return activeViews[ViewType.CONTENT];
    },
    
    getActiveSubContent : function() {
      return activeViews[ViewType.SUBCONTENT];
    },
    
    getActiveMain : function() {
      return activeViews[ViewType.MAIN];
    },
    
    getActiveNav : function() {
      return activeViews[ViewType.NAV];
    },
    
    getActiveFooter : function() {
      return activeViews[ViewType.FOOTER];
    },
    
    renderAll : function() {
      _.each(activeViews, function(view) {
        view.render();
      });
    }
  };
});