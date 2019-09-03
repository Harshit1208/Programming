/**
 * @description enter year and month
 * @since : 08/31/2019
 * @author : Harshit Sethi
 */
const input = require('readline-sync')
const calenderObject = require('../calenderstack/calenderstackBl')
var year = input.questionInt("enter year= ")
var month = input.questionInt("enter month from 1 to 12= ")
calenderObject.calender(month,year);