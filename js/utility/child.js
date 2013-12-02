define(function(require) {
  
  var _ = require('underscore');
  var Person = require('utility/person');
  
  var Child = function() {
    console.log("in child constructor");
    this.childVal = 30;
    Person.call(this);
    
    console.log(this.baseVal);
    console.log(this.personVal);
    console.log(this.childVal);
  };
  
  _.extend(Child.prototype, Person.prototype);
  
  Child.prototype.funcTwo = function() {
    console.log("in child function two");
    Person.prototype.funcTwo.call(this);
  };
  
  return Child;
});