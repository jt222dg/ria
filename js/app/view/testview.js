console.log("SYSTEM: Test view loading...");

define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        render : function() {
            return "<p>hi</p>";
        },
        
        showData : function(data) {
            return "<p>" + data + "</p>";
        }
    });
});