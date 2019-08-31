/**
 *@description : Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance. 
 */
class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        return this.items.push(element);
    }
    dequeue(){
        if(this.items.length==null){
            return "underflow";
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }


}
module.exports={Queue};

	
