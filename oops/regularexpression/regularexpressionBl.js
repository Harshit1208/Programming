/**
 *@description:Regular Expression Demonstration-Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *@since:09/04/2019
 *@author: Harshit Sethi
 */
var fs = require('fs');
var input=require('readline-sync')
var name=input.question("please enter your name");
var full=input.question("please enter your full name");
var mob=input.questionInt("please enter your contact no");
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
var dt=date + "-" + month + "-" + year;
fs.readFile('regularexpression.txt','utf-8',(err,data)=>
{
    if(err) throw err;
    var x=data.toString();
var net=x.replace(/<<name>>/g,name).replace(/<<full name>>/g,full).replace(/xxxxxxxxxx/g,mob).replace(/01-01-2016/g,dt)
console.log(net);
})