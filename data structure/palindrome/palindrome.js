/** 
* @purpose : To create Palindrome-Checker
* @description : A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
* @since : 08/28/2019
* @author : Harshit Sethi
*/
const input=require('readline-sync');
const dequeObj=require('../palindrome/palindromeBl.js');
var str=input.question("Enter word ");

var arr=[];
var arr1=[];
arr=str.split('');
var dq=new dequeObj.Deque();
for(var i=0;i<arr.length;i++){
    dq.pushback(arr[i]);
}
while(dq.size()!=0){
   arr1.push(dq.popback());
}

var str2=arr.toString();
var str1=arr1.toString();

if(str2==str1){
    console.log("The given string is a palindrome")
}
else

    {
        console.log("The given string is not a palindrome")
    }