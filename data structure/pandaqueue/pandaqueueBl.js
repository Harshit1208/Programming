/**
 *@description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the Linked List and Print the Anagrams from the Queue. 
 */
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; // element=info
        this.next = null   //next=link
    } 
} 
class Queue { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
    push(element) 
{ 
   // creates a new node 
   var node = new Node(element); 
      
   // to store current node 
   var current; 
 
   // if list is Empty add the 
   // element and make it head 
   if (this.head == null) 
       this.head = node; 
   else { 
       current = this.head; 
 
       // iterate to the end of the 
       // list 
       while (current.next) { 
           current = current.next; 
       } 
 
       // add node 
       current.next = node; //identify last node and add new next to it
   } 
   this.size++; 
} 
pop () 
{ 
   if(this.size==0){
       return null;
   } 
   {
   var current = this.head.element
   this.head=this.head.next; 
    this.size--;
    
    return current; 
}
}
        printQueue() 
        { 
            var curr = this.head; 
            var str = ""; 
            while (curr) { 
                str += curr.element + " "; 
                curr = curr.next; 
            } 
            console.log (str); 
        }
        
          
} 


var anagram1=()=>{
try{
var prime=[];
    var i=0;
     var num=0;
   
     for(i=1;i<=1000;i++){
         var counter=0;
         for(num=i;num>=1;num--){
             if(i%num==0){
                 counter=counter+1;
             }
         }
         if(counter==2){
             prime.push(i);
         }


}
var arr=[];


    for(var j=0;j<(prime.length-1);j++){
        for(var k=j+1;k<(prime.length);k++){
        var x = [];
        var y = [];
        var c1=prime[j].toString();
        x=c1.split('');
         x.sort();
        var s1=x.toString();
        
            var c2=prime[k].toString();
             y =c2.split('');
           y.sort();
            var s2=y.toString();
            if(s1===s2){
              
                          arr.push(parseInt(prime[j]));
                          arr.push(parseInt(prime[k]));
                   
                   }
                  
                    }
        
                }
       arr.sort(function(a,b){return (a-b)})
       var arr1=[];
       for(var i=0;i<arr.length;i++){
           if(!(arr1.includes(arr[i]))){
               arr1.push(arr[i]);
           }
       }
        return arr1;
        }
    
    catch(err){
        console.log("Error");
    }
}
        
  
module.exports={anagram1,Queue};