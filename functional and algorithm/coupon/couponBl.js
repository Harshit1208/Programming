/**
 * @description:Random no. generated for distinct coupon
 * @param {*} num 
 */
var year=(num)=>{
  try{
    var set1=new Set();
    for(let x=0;x<num;x++)
    {
        var y=set1.add(Math.round(Math.random()*num*10));
      
    }
    
console.log(y);
  }
  catch(error)
         {
        console.log("error");
         }
}
module.exports={year}
