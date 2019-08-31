/** 
* @description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the Linked List and Print the Anagrams from the Queue.
* @since : 08/29/2019
* @author : Harshit Sethi
*/
var obj=require("../pandaqueue/pandaqueueBl");
var arr1=obj.anagram1();
var queue=new obj.Queue();
for(var i=0;i<arr1.length;i++){
    queue.push(arr1[i]);
}

while(queue.size!=0){
    console.log(queue.pop());
    
}