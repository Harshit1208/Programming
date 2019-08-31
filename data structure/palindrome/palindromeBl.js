/**
 *@description : A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome. 
 */
class Deque{
    constructor(){
        this.items=[];
    }
    pushback(element){
        return this.items.push(element);
    }
    popfront(){
        if(this.items.length==null){
            return "underflow";
        }
        return this.items.shift();
    }
    pushfront(element){
        return this.items.unshift(element);
    }
    popback(element){
        return this.items.pop(element);
    }
    isEmpty(){
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }


}
 module.exports={Deque};