/**
 * @description:Leap year
 * @since : 08/20/2019
 * @author : Harshit Sethi 
 */
const input=require('readline-sync');
const leapYear=require('../leap year/leapyearBl.js');
var year=input.question('Enter the year: ');
if(year<1000){
    console.log('incorrect');
}
else
{
console.log(leapYear.leapyear(year));
}