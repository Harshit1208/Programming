/**
 * @description:Computes the prime factorization of N using brute force
 * @since : 08/20/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const factors=require('../factors/factorsBl.js');
var number=input.question('Enter the value:');
(factors.f(number));