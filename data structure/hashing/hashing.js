/** 
* @description : Hashing
* @since : 08/31/2019
* @author : Harshit Sethi
*/
const input = require('readline-sync')
const fs = require('fs')
const linkObject = require('../element/elementBl')
var filedata = fs.readFileSync('hashing.txt','utf-8',(err) => { 
    if (err) throw err; 
})
var arr = filedata.split(" ");
var inp = input.questionInt("enter number you want to find= ")
var slots = []
for(var i=0;i<11;i++){
    slots[i]= new linkObject.LinkedList();
}
for(var i=0;i<arr.length;i++){
    var num = parseInt(arr[i]);
    var rem = num%11;
    slots[rem].add(num);
}
var numrem = inp%11;
if(slots[numrem].isEmpty()){
    console.log("number was not there now added")
    slots[numrem].add(inp);
}
else{
    inpIndex=slots[numrem].indexOf(inp);
    if(inpIndex==-1){
        console.log("number was not there now added")
        slots[numrem].add(inp);
    }
    else{
        console.log("number was present now removed")
        slots[numrem].removeElement(inp);
    }
}
var writeData = ""
for(var i=0;i<11;i++){
    if(!slots[i].isEmpty()){
        writeData = writeData + slots[i].printListReturn() + " ";
    }
}
fs.writeFile('hashing.txt', writeData.trim(), (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
}) 