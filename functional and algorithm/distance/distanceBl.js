/**
 * @description:Euclidean distance from x and y
 * @param {*} x 
 * @param {*} y 
 */
var sqr = (x, y) => {
    try{
        var distance = Math.sqrt(x * x + y * y);
        console.log(distance);
    }
    catch(error)
         {
        console.log("error");
         }
}
module.exports = { sqr }