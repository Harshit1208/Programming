/** 
* @description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the Linked List and Print the Anagrams in the Reverse Order.
* @since : 08/29/2019
* @author : Harshit Sethi
*/
var obj=require("../pandastack/pandastackBl");
var arr1=obj.anagram1();
var stack=new obj.Stack();
for(var i=0;i<arr1.length;i++){
    stack.push(arr1[i]);
}

while(stack.size!=0){
    console.log(stack.pop());
    
}