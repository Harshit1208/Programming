/** 
* @description : binary tree
* @since : 08/30/2019
* @author : Harshit Sethi
*/
var input=require("readline-sync")
var obj=require("../binarytree/binarytreeBl")
var arr=[]
var number=input.questionInt("enter no of test cases")
console.log("enter numbers")
for(var i=0;i<number;i++){
    arr.push(input.questionInt(""))
}
console.log("num of possible trees respectively are")
    for(var i=0;i<number;i++){
        console.log(obj.bst(arr[i]))
    }


