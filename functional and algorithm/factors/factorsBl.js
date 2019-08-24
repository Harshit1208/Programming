/**
 * @description:Computes the prime factorization of N using brute force
 * @param {*} number 
 */
var f=(number)=>{
    try{
        for(let i=2;i*i<number;i++){
            while(number%i==0){
                console.log(i);
                number=number/i;
    
            }
            if(number>2){
                console.log(number);
            }
        }

    }catch(error)
    {
   console.log("error");
    }
}
module.exports={f}