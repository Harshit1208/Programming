/**
 *@description:insertion sort method for string 
 */
const input=require('readline-sync');
var number=(entries)=>
{
 try{
    var point=0;
    var res=[];
    for (let i = 0; i < entries; i++){
 res[i]=input.question();
    }
    for(let i=1;i<entries;i++)
    {
        point = res[i];
        var j = i - 1;
        while (j >= 0 && res[j] > point){
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = point;
    }
    console.log(res.toString());
 }
 catch(error)
 {
console.log("error");
 }
 
}
module.exports={number}