/**
 *@description:Prototype Design Pattern
 *@since:09/10/2019
 *@author: Harshit Sethi
 */
class employee{
    constructor(){
        this.items = [];
    }
    loadData(){
        this.items.push(1)
        this.items.push(2)
        this.items.push(3)
        this.items.push(4)
        this.items.push(5)
    }
    getData(){
        return this.items;
    }
    clone(){
        var clone = [];
        this.items.forEach(function(item){ 
            clone.push(item); 
        }); 
        return clone;
    }
}
var emp = new employee();
emp.loadData();
var emp1 = emp.clone();
var emp2 = emp.clone();
emp1.pop()
emp1.push(65);
emp1.unshift(68)
emp2.pop();
emp2.shift();
console.log(emp.getData());
console.log(emp1);
console.log(emp2);