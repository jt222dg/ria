console.log("SYSTEM: Router module loading...");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewHandler = require('view/helpers/handler');
  var GameHandler = require('game/game-handler');
  var PageType    = require('view/helpers/pagetype');
  var _           = require('underscore');
  
  return Backbone.Router.extend({
    routes : {
      '*default' : 'goTo'
    },
    
    initialize : function() {
      this.viewHandler = new ViewHandler();
      this.gameHandler = new GameHandler();
      this.lastPage    = PageType.MAIN;
    },
    
    manageGame : function(currentPage) {
      if (this.lastPage === PageType.GAME) {
        if (this.gameHandler.isRunning()) {
          this.gameHandler.stopGame();
        }
      }
      
      if (currentPage === PageType.GAME) {
        
        this.gameHandler.onInit();
        this.gameHandler.showMenuScreen();
        
        var that = this;
        
        $('#start-game-button').click(function() {
          if ($('#name').val() !== "") {
            $('#start-game-button').attr('disabled', 'disabled');
            $('#name').attr('disabled', 'disabled');
            that.gameHandler.startGame();
          }
        });
      }
      
      this.lastPage = currentPage;
    },
    
    goTo: function() {
      var pageType = PageType.MAIN;
      
      switch (Backbone.history.fragment) {
        case 'main'  : pageType = PageType.MAIN;   break;
        case 'game'  : pageType = PageType.GAME;   break;
        case 'about' : pageType = PageType.ABOUT;  break;
        case 'scores': pageType = PageType.SCORES; break;
        default      : pageType = PageType.MAIN;   break;
      }
      
      this.viewHandler.renderPage(pageType);
      this.manageGame(pageType);
    }
  });
});