/**
 * @description:0-1000 all the prime no.'s
 */
var primeno=()=>{
    try{
        for(var i=1;i<=1000;i++){
            for(j=2;j<=i-1;j++){
                if(i%j==0){
                    break;
                }
                else
                {
                    if(j!=i-1)
                    {
                        continue;
                    }
                    console.log(i);
                }
            }
        }
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={primeno}