/**
 *@description:binarySearch method for string 
 */
const input=require('readline-sync');
var binarysearchstring=(array) =>
{
 try{
   
var target=input.question('Enter the required string');
let startIndex=0;
let endIndex=array.length-1;
while(startIndex<=endIndex)
{
    let middleIndex=Math.floor((startIndex+endIndex)/2);
    if(target==array[middleIndex])
    {
        return console.log("Target is found" +array[middleIndex]);
    }
    if(target>array[middleIndex])
    {
    
        startIndex=middleIndex+1;
    }
    if(target<array[middleIndex])
    {
        
        endIndex=middleIndex-1;
    }
    
}
console.log("Target not found");
 }
 catch(error)
 {
console.log("error");
 }
 
}
module.exports={binarysearchstring}