console.log("SYSTEM: Conifguring RequireJS..");

requirejs.config({
    
    baseUrl: 'js/lib',
    
    paths: {
        // Base folder paths
        app: '../app',
        
        // Lib paths
        jquery:     'jquery/jquery',
        require:    'require/require',
        'bb-raw':   'backbone/backbone-raw',
        backbone:   'backbone/backbone-module',
        underscore: 'underscore/underscore'
        
        // App paths
    },
    
    shim: {
        'bb-raw': {
            deps: ['underscore', 'jquery'], // Backbone.js dependencies:
            exports: 'Backbone'             // Use 'Backbone' as the module value.
        },
        'underscore': {
            exports: '_'                    // Use '_' as underscore value.
        }
    }
});

console.log("SYSTEM: Main module loading...");

require(["app/app"], function(app) {
    app.run();
});