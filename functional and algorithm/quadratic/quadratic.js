/**
 * @description:Quadratic equation
 * @since : 08/21/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const object = require('../quadratic/quadraticBl');
var a=input.question('Enter a');
var b=input.question('Enter b');
var c=input.question('Enter c');
object.dimension(a,b,c);