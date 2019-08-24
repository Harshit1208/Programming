/**
 * @description: prime numbers that are Anagram and Palindrome 

 */
var math=()=>
{
    try{
        var sum=0;
    var array=[];
    var z=0;
    var x;
    var y=0;
    for(var i=1;i<=1000;i++)
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
                array.push(i);
            }
           
        }
    }
    
    console.log("Enter prime no less than 1000")
    for(i=0;i<array.length;i++)
    {
        for(j=i+1;j<array.length;j++)
        {
        var c1=(array[i].toString().split("").sort()).toString();
        var c2=(array[j].toString().split("").sort()).toString();
        if(c1==c2)
          {
             console.log(array[i]+"and "+array[j]+"are prime angarams");
          }  
        }
    }  
for(let i=0;i<array.length;i++)
{
     x=array[i];
     y=x;
    while(y>0)
    {
         z=y%10;
         sum=sum*10+z;
         y=parseInt(y/10);
    }
    if(sum==x)
    {
        console.log(x);
    }
    sum=0;
}
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={math}
