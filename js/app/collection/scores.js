console.log("SYSTEM: Scores module loading...");

define(function(require) {
  var Backbone = require('backbone');
  var Score    = require('model/score');
                 require('localstorage');

  return Backbone.Collection.extend({
    model        : Score,
    localStorage : undefined,
    
    comparator : function(model) {
      return -(parseInt(model.get('amount')));
    },
    
    initialize : function(models, options) {
      if (this.options && this.options.storage) {
        this.localStorage = new Backbone.LocalStorage(options.storage);
      }
    }
  });
});