// Define a module that depends on depend.js
define(["app/depend"], function(depend) {
    console.log(depend);
    var _one = depend.getVar();
    
    return {
        getOne : function() {
            return _one;
        }
    };
});