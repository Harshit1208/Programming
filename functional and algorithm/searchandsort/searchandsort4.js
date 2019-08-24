/**
 * @description:bubble sort method for integer
 * @since : 08/23/2019
 * @author : Harshit Sethi 
 */
const input = require('readline-sync');
const location = require("./searchandsort4Bl");

var size = input.question("Please enter the array size:");
location.bubbleSort(size);