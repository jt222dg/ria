console.log("SYSTEM: Main view loading... ");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewFactory = require('app/view-factory');
  var NavView     = require('view/nav');
  var FooterView  = require('view/footer');
  var ContentView = require('view/content');
  var InfoView    = require('view/info');
  var GameView    = require('view/game');
  var AboutView   = require('view/about');
  
  var ViewType = {
    CONTENT    : 0,
    SUBCONTENT : 1,
    NAV        : 2,
    FOOTER     : 3
  };
  
  function renderMain() {
    if (!(ViewFactory.getActiveView(ViewType.CONTENT) instanceof ContentView)) {
      ViewFactory.changeView(ViewType.CONTENT, new ContentView());
    }
    
    if (!(ViewFactory.getActiveView(ViewType.NAV) instanceof NavView)) {
      ViewFactory.changeView(ViewType.NAV, new NavView());
    }
    
    if (!(ViewFactory.getActiveView(ViewType.FOOTER) instanceof FooterView)) {
      ViewFactory.changeView(ViewType.FOOTER, new FooterView());
    }
  }
  
  return Backbone.View.extend({
    defaults : {
    },
    
    initialize : function() {
    },
    
    renderGamePage : function() {
      renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new GameView());
    },
    
    renderMainPage : function() {
      renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new InfoView());
    },
    
    renderAboutPage : function() {
      renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new AboutView());
    }
    
  });
});