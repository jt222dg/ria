console.log("SYSTEM: Router module loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var MainView = require('view/main');
  
  return Backbone.Router.extend({
    routes : {
      ''         : 'index',
      'index'    : 'index',
      'game'     : 'game',
      'about'    : 'about',
      '*default' : 'def'
    },
    
    defaults : {
      mainView : undefined
    },
    
    initialize : function() {
      this.mainView = new MainView();
    },
    
    index : function() {
      this.mainView.renderMainPage();
    },
    
    game : function() {
      this.mainView.renderGamePage();
    },
    
    about : function() {
      this.mainView.renderAboutPage();
    },
    
    def : function(def) {
      console.log("in def");
    }
  });
});