/** 
* @description : Calender
* @since : 08/30/2019
* @author : Harshit Sethi
*/
const input = require('readline-sync')
const calenderObject = require('../calender/calenderBl')
var year = input.questionInt("enter year= ")
var month = input.questionInt("enter month from 1 to 12= ")
calenderObject.calender(month,year);