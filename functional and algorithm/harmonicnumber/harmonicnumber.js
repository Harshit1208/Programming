/**
 * @description: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @since : 08/20/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const harshit=require('../harmonicnumber/harmonicnumberBl.js');
var number=input.question('Enter the value: ');
console.log(harshit.harmonics(number));