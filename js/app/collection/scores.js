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
    
    save : function() {
      this.each(function(model) {
        model.save();
      });
    },
    
    initialize : function(models, options) {
      if (options && options.storage) {
        this.initLocalStorage(options.storage);
      }
    },
    
    initLocalStorage : function(storage) {
      this.localStorage = new Backbone.LocalStorage(storage);
    }
  });
});