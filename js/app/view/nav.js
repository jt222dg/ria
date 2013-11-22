console.log("SYSTEM: Nav view loading...");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var _           = require('underscore');
  var $           = require('jquery');
  var navTemplate = require('text!template/nav.html');
  
  function removeOldActiveButton() {
    $('.active').removeClass('active');
  }
  
  return Backbone.View.extend({
    
    el : "#navigation-element",
    
    defaults : {
    },
    
    initialize : function() {
    },
      
    render : function() {
      var template = _.template(navTemplate, {});
      this.$el.html(template);
      
      switch (Backbone.history.fragment) {
        case "index" : this.activateHomeButton();  break;
        case "game"  : this.activateGameButton();  break;
        case "about" : this.activateAboutButton(); break;
        default      : this.activateHomeButton();  break;
      }
    },
    
    events : {
      "click #home"  : "activateHomeButton",
      "click #game"  : "activateGameButton",
      "click #about" : "activateAboutButton"
    },
    
    activateHomeButton : function(event) {
      removeOldActiveButton();
      $('#home').parent().addClass('active');
    },
    
    activateGameButton : function(event) {
      removeOldActiveButton();
      $('#game').parent().addClass('active');
    },
    
    activateAboutButton : function(event) {
      removeOldActiveButton();
      $('#about').parent().addClass('active');
    }
  });
});