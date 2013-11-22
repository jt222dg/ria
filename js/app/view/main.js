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
  
  function resetDefaults() {
    if (!(ViewFactory.getActiveContent() instanceof ContentView)) {
      ViewFactory.changeContent(new ContentView());
    }
    
    if (!(ViewFactory.getActiveNav() instanceof NavView)) {
      ViewFactory.changeNav(new NavView());
    }
    
    if (!(ViewFactory.getActiveFooter() instanceof FooterView)) {
      ViewFactory.changeFooter(new FooterView());
    }
  }
  
  return Backbone.View.extend({
    defaults : {
    },
    
    initialize : function() {
    },
    
    renderGamePage : function() {
      resetDefaults();
      ViewFactory.changeSubContent(new GameView());
    },
    
    renderMainPage : function() {
      resetDefaults();
      ViewFactory.changeSubContent(new InfoView());
    },
    
    renderAboutPage : function() {
      resetDefaults();
      ViewFactory.changeSubContent(new AboutView());
    }
    
  });
});