console.log("SYSTEM: Test Model loading...");

define(["backbone"], function(Backbone) {
    var _data = 15;
        
    return Backbone.Model.extend({
        getData : function() {
            return _data;
        },
        
        setData : function(data) {
            _data = data;
        }
    });
});