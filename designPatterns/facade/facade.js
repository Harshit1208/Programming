/**
 *@description:Facade Design Pattern
 *@since:09/11/2019
 *@author: Harshit Sethi
 */
var Mortgage = function(name) {
    this.name = name;

 
    applyFor = (amount)=> {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
    return{
        applyFor:applyFor
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Harshit Sethi");
    var result = mortgage.applyFor("Rs.1,20,000");
 
    console.log(result)
}
run();