/**
 * @description:Windchill
 * @param {*} t 
 * @param {*} v 
 */
var wind=(t,v)=>{
    try{
        var w;
    var d=0;
    d=Math.pow(v,0.16);
    w=35.74+0.6215*t+(0.4275*t-35.75)*d;
    console.log(w);
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={wind}