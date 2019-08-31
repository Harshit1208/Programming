/**
 * @description : Add the Prime Numbers in the Range of 0 - 1000 using the 2D array. 
 */
var number=()=>
{
    try
{
    var i;
    var j;
    var array1=[];
    for(i=1;i<=1000;i++)
    {
      for(j=2;j<=i-1;j++)
      {
          if(i%j==0)
          {
              break;
          }
          else
          {
                if(j!=i-1)
                {
                    continue;
                }
                array1.push(i);
          }
      }

    }
    return array1;
}
 catch(error)
 {
   console.log("error");
 }  
}
module.exports={number}