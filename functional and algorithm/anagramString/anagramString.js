/**
 *@description:Checking of two strings to be anagram 
 *@since : 08/22/2019
 *@author : Harshit Sethi
 */
const input=require('readline-sync');
const string=require('../anagramString/anagramStringBl');
var string1=input.question('Enter string1');
var string2=input.question('Enter string2');
string.math(string1,string2);