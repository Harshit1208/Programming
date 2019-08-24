/**
 *@description:binarySearch method for string 
 */
const input=require('readline-sync');
var number=(size)=>
{
 try{
    var array=[];
    var array1=[];
    for(let i=0;i<size;i++)
    {
        array[i]=input.question('Enter the values');
    }

var target=input.question('Enter the required string');
array1=array.sort();
let startIndex=0;
let endIndex=size-1;
while(startIndex<=endIndex)
{
    let middleIndex=Math.floor((startIndex+endIndex)/2);
    if(target==array1[middleIndex])
    {
        return console.log("Target is"+middleIndex+ "," +array1[middleIndex]);
    }
    if(target>array1[middleIndex])
    {
        console.log("Target is on right side");
        startIndex=middleIndex+1;
    }
    if(target<array1[middleIndex])
    {
        console.log("Target is on left side")
        endIndex=middleIndex-1;
    }
    
}
console.log("Not found");
 }
 catch(error)
 {
console.log("error");
 }
 
}
module.exports={number}