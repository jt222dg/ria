requirejs.config({
    
    // By default module IDs will be loaded from js/lib
    baseUrl: 'js/lib',
    
    // If module ID's start with "app", load from js/app
    paths: {
        app: '../app'
    },
    
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'], // Backbone.js dependencies:
            exports: 'Backbone'             // Use 'Backbone' as the module value.
        },
        'underscore': {
            exports: '_'                    // Use '_' as the module value.
        }
    }
});

requirejs(['backbone', 'jquery', 'underscore', 'app/test'],
function   (Backbone,   $,        _,            test) {
    //backboneTraining(Backbone);
    //jqueryTraining($);
    //underscoreTraining(_);
    console.log(test);
    moduleTraining(test);
});

var testing = function(numb) {
    console.log(numb);
};

var moduleTraining = function(test) {
    console.log(test.getOne());
};

var backboneTraining = function(Backbone) {
};

var jqueryTraining = function($) {
    $("a").addClass("test");
    $("a").hover(function() {
        $(this).fadeOut(800);
    }, function() {
        $(this).fadeIn(800);
    });
};

var underscoreTraining = function(_) {
    _.each([1, 2, 3], testing);
    console.log(_.random(0, 1000));
    var arr = [1, 2, 3, 4, 5];
    console.log(_.contains(arr, 3) + " " + _.contains(arr, 99));
    var obj = { one: 1, two : 2, three : 3 };
    console.log(_.contains(obj, 3) + " " + _.contains(obj, 99));
};