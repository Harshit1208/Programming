/**
 * @description:Finding number
 */
var input=require("readline-sync")
var find=(N) =>{
    try{
        var n=(Math.log(N))/(Math.log(2));
        var low=0;
        var high=N-1;
        var mid=Math.round((low+high)/2);
        var i=0;
        while(i<n){
            console.log("Is the no " +mid);
            var response=input.question("");
            if(response=="yes"){
                break;
            }
            if(response=="no"){
                console.log("Is the higher or lower than " +mid);
                var res=input.question("");
                if(res=="higher"){
                    low=mid+1;
                }
                if(res=="lower"){
                    high=mid-1;
                }
                mid=Math.round((low+high)/2);
                // else{
                //     console.log("enter a valid input");
                // }
            }
        }
        i++;
        // console.log("no of gusses to be used are " +n);
    }
    catch(error){
        console.log(error);
    }
}
module.exports={find}