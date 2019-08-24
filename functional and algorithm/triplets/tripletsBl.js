/**
 * @description:A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0
 * @param {*} N 
 */
var integer=(N)=>{
    try{
        var arr=[];
    const input=require('readline-sync');
    for(var i=0;i<N;i++){
        arr[i]=input.questionInt(" ");
    }
    for(i=0;i<arr.length-2;i++)
    {
        for(j=i+1;j<arr.length-1;j++)
        {
            for(k=j+1;k<arr.length;k++)
        {   if(arr[i]+arr[j]+arr[k]==0)
            {
                console.log("the sum of three integers" +arr[i]+" "+arr[j]+" "+arr[k]);
            }  
        }
        }
        
    }
 
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={integer}