/**
 * @description:Euclidean distance from x and y
 * @since : 08/21/2019
 * @author : Harshit Sethi
 */
const input = require('readline-sync');
const location = require('../distance/distanceBl');
var x = input.question('Enter the value of x');
var y = input.question('Enter the value of y');
location.sqr(x, y);