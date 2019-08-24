/**
 * @description:Checking of two strings to be anagram
 * @param {*} string1 
 * @param {*} string2 
 */
var math=(string1,string2)=>{
    try{
        if(string1.length==string2.length){
            var array1=string1.split("");
            array1.sort();
            var array2=string2.split("");
            array2.sort();
            console.log(array1);
            console.log(array2);
            var c1=array1.toString();
            var c2=array2.toString();
    if(c1==c2){
        console.log("Anagram");
    }
    else{
        console.log("Not");
    }
    
            }
           
        
        else{
            console.log(false);
        }
    }
    catch(error)
         {
        console.log("error");
         }
}
module.exports={math}