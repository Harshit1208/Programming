/**
 * @description : Prme 2D anagram
 */
var number=()=>
{
    try{
    var i;
    var j;
    var array=[];
    var array1=[];
    var sum=0;
    var z=0;
    var y=0;
    var x;
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
            array.push(i);     
          }
      }
    }
    console.log("prime numbers and  anagram which are less than 1000")
    for(i=0;i<array.length;i++)
    {
        for(j=i+1;j<array.length;j++)
        {
            var s1=(array[i].toString().split("").sort()).toString();
            var s2=(array[j].toString().split("").sort()).toString();
             if(s1==s2)
             {
                 array1.push(array[i]);
                 array1.push(array[j]);
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