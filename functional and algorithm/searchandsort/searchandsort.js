/**
 * @description:binarySearch method for integer
 * @since : 08/23/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const binary=require('../searchandsort/searchandsortBl');
var target=input.question('Enter the target number');
var size=input.question('Enter the array size');
binary.number(target,size);