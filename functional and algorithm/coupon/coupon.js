/**
 * @description : Random no. generated for distinct coupon
 * @since : 08/21/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const harshit=require('../coupon/couponBl');
var num=input.question('Enter the value');
harshit.year(num);