/**
 * @description:Replacing the strings
 * @param {*} name 
 */
var replaceName= (name) => {
    try{
        if(name.length<3){
            return "wrong input";
        }
        return "hello" +name+ ",how are you?";
    
    }
    catch(error)
    {
   console.log("error");
    }
    
    }
module.exports={replaceName}