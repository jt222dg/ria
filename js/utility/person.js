define(function(require) {
  
  var _ = require('underscore');
  var Base = require('utility/base');
  
  var Person = function() {
    console.log("in person constructor");
    this.personVal = 20;
    Base.call(this);
  };
  
  _.extend(Person.prototype, Base.prototype);
  
  Person.prototype.func = function() {
    console.log("in person function");
  };
  
  Person.prototype.funcTwo = function() {
    console.log("in person function two");
  };
  
  return Person;
});