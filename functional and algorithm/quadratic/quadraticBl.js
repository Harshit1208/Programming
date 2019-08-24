/**
 * @description:Quadratic equation
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */
var dimension=(a,b,c)=>{
    try{
        var d=0;
    var delta=0;
    var x1;
    var x2;
    delta=b*b-4*a*c;
    d=Math.sqrt(delta);
    x1=(-b+d)/(2*a);
    x2=(-b-d)/(2*a);
    console.log(x1,x2);
    }
    catch(error)
    {
   console.log("error");
    }
    

}
module.exports={dimension}