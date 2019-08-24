/**
 * @description:This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
 * @since : 08/20/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const harshit=require('../power of 2/powerof2Bl.js');
var num=input.question('Enter the N: ');
harshit.sethi(num);