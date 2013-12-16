console.log("SYSTEM: Router module loading...");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewHandler = require('view/handler');
  var GameHandler = require('game/game-handler');
  var PageType    = require('view/pagetype');
  
  return Backbone.Router.extend({
    routes : {
      ''         : 'index',
      'index'    : 'index',
      'game'     : 'game',
      'about'    : 'about',
      'scores'   : 'scores',
      '*default' : 'def'
    },
    
    initialize : function() {
      this.viewHandler = new ViewHandler();
      this.gameHandler = new GameHandler();
      this.lastPage    = PageType.MAIN;
    },
    
    manageGame : function(currentPage) {
      if (this.lastPage === PageType.GAME) {
        this.gameHandler.stopGame();
      } if (currentPage === PageType.GAME) {
        this.gameHandler.startGame();
      }
        
      this.lastPage = currentPage;
    },
    
    index : function() {
      this.viewHandler.renderPage(PageType.MAIN);
      this.manageGame(PageType.MAIN);
    },
    
    game : function() {
      this.viewHandler.renderPage(PageType.GAME);
      this.manageGame(PageType.GAME);
    },
    
    about : function() {
      this.viewHandler.renderPage(PageType.ABOUT);
      this.manageGame(PageType.ABOUT);
    },
    
    scores : function() {
      this.viewHandler.renderPage(PageType.SCORES);
      this.manageGame(PageType.SCORES);
    },
    
    def : function(def) {
      this.manageGame(PageType.MAIN);
    }
  });
});