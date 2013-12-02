console.log("SYSTEM: Router module loading...");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewHandler = require('app/view-handler');
  var GameHandler = require('game/controller/main');
  
  // Page type enum
  var PageType = {
    MAIN  : 0,
    GAME  : 1,
    ABOUT : 2
  };

  // Private variables
  var lastPage = PageType.MAIN;
  
  function cleanLastVisited(type) {
    if (type === PageType.GAME) {
      GameHandler.stopGame();
    }
      
    lastPage = type;
  }
  
  return Backbone.Router.extend({
    routes : {
      ''         : 'index',
      'index'    : 'index',
      'game'     : 'game',
      'about'    : 'about',
      '*default' : 'def'
    },
    
    defaults : {
      viewHandler : undefined
    },
    
    initialize : function() {
      this.viewHandler = new ViewHandler();
    },
    
    index : function() {
      cleanLastVisited(PageType.MAIN);
      this.viewHandler.renderMainPage();
    },
    
    game : function() {
      cleanLastVisited(PageType.GAME);
      this.viewHandler.renderGamePage();
      GameHandler.startGame();
    },
    
    about : function() {
      cleanLastVisited(PageType.ABOUT);
      this.viewHandler.renderAboutPage();
    },
    
    def : function(def) {
      cleanLastVisited(PageType.MAIN);
      console.log("in default route");
    }
  });
});