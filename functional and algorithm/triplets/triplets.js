/**
 * @description:A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0
 * @since : 08/22/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const triple=require('../triplets/tripletsBl');
var N=input.question('Enter the numbers');
console.log("Enter the array elements");
triple.integer(N);