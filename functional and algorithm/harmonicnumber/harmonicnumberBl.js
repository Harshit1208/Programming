/**
 * @description: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @param {*} number 
 */
var harmonics=(number)=>{
    try{
        if(number!=0){
            var sum=0;
            for(let i=1;i<=number;i++){
                sum=sum+1/i;
    
            }
            return sum;
        }
        else{
            console.log(invalid);
        }
    }
    catch(error)
         {
        console.log("error");
         }
}
module.exports={harmonics}