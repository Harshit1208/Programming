/** 
* @description : Prme 2D anagram
* @since : 08/29/2019
* @author : Harshit Sethi
*/
const input=require('readline-sync');
const ssobject =require('../prime2dana/prime2danaBl');
var array=ssobject.number(); 
var array1=[];
var array2=[];
var x=100;
var count=0;
var len=array.length;
array.sort();
console.log(array.sort(function(a,b){return a-b}));
console.log(len);
for(i=0;i<len;i++)
{ 
    if(!array1.includes(array[i]))
  {
    array1.push(array[i]);
  }
}
var len1=array1.length;
console.log(array1);
console.log(len1);
for(i=0;i<10;i++)
{
    array2[i]=[];
}
for(i=0;i<len1;i++)
{
    if(array1[i]>x)
    {
        x=x+100;
        count++;
    }
    if(array1[i]<x)
    {
        array2[count].push(array1[i]);
    }
}
for(i=0;i<10;i++) 
{
    str=" ";
    var len2=array2[i].length;
    for(j=0;j<len2;j++)
    {
        str=str+" "+array2[i][j];
    }
    console.log(str);
}                  