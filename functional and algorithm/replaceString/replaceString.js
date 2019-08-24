/**
 * @description:Replacing the strings
 * @since : 08/20/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const replaceStringObject=require('../replaceString/replaceStringBl');

var name=input.question('enter your name: ');
console.log(replaceStringObject.replaceName(name));