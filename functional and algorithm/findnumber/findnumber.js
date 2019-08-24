/**
 * @description:Finding number
 * @since : 08/24/2019
 * @author : Harshit Sethi
 */
var input=require("readline-sync")
var obj=require("../findnumber/findnumberBl")
var N=input.questionInt("Enter a number which is a power of 2: ");
var res=input.question("Think of a number between 0 to " +(N-1));
if(res=="ok"){
    obj.find(N);
}