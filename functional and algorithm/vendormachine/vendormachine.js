/**
 * @description:Vendor machine of 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes
 * @since : 08/24/2019
 * @author : Harshit Sethi
 */
var input=require("readline-sync")
var object=require("../vendormachine/vendormachineBl")
var amnt=input.questionInt("Please enter the amount you want to withdraw");
object.count(amnt);