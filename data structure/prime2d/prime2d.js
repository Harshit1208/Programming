/** 
* @description : Add the Prime Numbers in the Range of 0 - 1000 using the 2D array.
* @since : 08/29/2019
* @author : Harshit Sethi
*/
const input=require('readline-sync');
const ssobject =require('../prime2d/prime2dBl');
var arr=ssobject.number(); 
var len=arr.length;
console.log(arr);
console.log(len);
var i;
var x=100;
var count=0;
array=[];
for(i=0;i<10;i++)
{
    array[i]=[];
}
for(i=0;i<len;i++)
{
    if(arr[i]>x)
     {
         x=x+100;
         count++;
     }
     if(arr[i]<x)
        {
                array[count].push(arr[i]); 
        }
}
for(i=0;i<10;i++)
{
    var len1=array[i].length;
    str=" ";
    for(j=0;j<len1;j++)
    {
        str=str+" "+ array[i][j];
    } 
    console.log(str);
}

