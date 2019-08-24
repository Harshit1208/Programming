/**
 * @description:Windchill
 * @since : 08/21/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const replace=require('../windchill/windchillBl');
var t=input.question('enter t: ');
var v=input.question('enter v: ');
replace.wind(t,v);