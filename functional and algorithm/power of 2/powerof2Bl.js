/**
 * @description:This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.

 * @param {*} num 
 */
var sethi=(num)=>
{
    try{
        for(let i=0;i<num;i++)
    {
     console.log("the value is:"+i+ ""+ Math.pow(2,i));
    }
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={sethi}