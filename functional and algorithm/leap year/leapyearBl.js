/**
 * @description:Leap year
 * @param {*} year 
 */
var leapyear=(year)=>{
   try{
    if(year%4==0){
        //condition for checking leap year or not 
    return 'leap year:';
}
else{
    return 'not a leap year:';
}
   }
   catch(error)
   {
  console.log("error");
   }
   
}
module.exports={leapyear}