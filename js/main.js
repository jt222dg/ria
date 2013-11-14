console.log("SYSTEM: Main module loading...");

require(["app/app"], function(app) {
    app.run();
});