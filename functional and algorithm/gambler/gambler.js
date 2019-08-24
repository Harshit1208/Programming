/**
 * @description:Gambler problem which includes wins and bets and average the results
 * @since : 08/20/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const gambler=require('../gambler/gamblerBl');
var money=input.question('Enter the money');
var trials=input.question('Enter the trials');
var goal=input.question('Enter the goal');
gambler.lit(money,trials,goal);