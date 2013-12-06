console.log("SYSTEM: Scores module loading...");

define(function(require) {
  var Backbone     = require('backbone');
  var Score        = require('model/score');
                     require('localstorage');

  return Backbone.Collection.extend({
    model : Score,
    localStorage : new Backbone.LocalStorage("scores"),

    initialize : function() {
      console.log(this.localStorage);
    }
  });
});