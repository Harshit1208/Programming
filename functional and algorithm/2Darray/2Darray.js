/**
 * @description : to print two dimensional array
 * @since : 08/21/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const two = require('../2Darray/2DarrayBl');
var col=input.question('Enter the coloumns');
var row=input.question('Enter the rows');
two.dimension(col,row);