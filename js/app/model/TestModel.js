console.log("SYSTEM: Test Model loading...");

define(["backbone"], function(Backbone) {
  var _privateStaticData = 7;
  
  return Backbone.Model.extend({
    _publicData : 15,
    
    getPrivateData : function() {
      return _privateStaticData;
    },
    
    setPrivateData : function(data) {
      _privateStaticData = data;
    },
    
    getData : function() {
      return this._publicData;
    },
    
    setData : function(data) {
      this._publicData = data;
    }
  });
});