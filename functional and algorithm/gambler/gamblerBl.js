/**
 * @description:Gambler problem which includes wins and bets and average the results
 * @param {*} money 
 * @param {*} trials 
 * @param {*} goal 
 */
var lit=(money,trials,goal)=>{
    try{
        var win=0;
        var bet=0;
        var winPercentage=0;
        var lossPercentage=0;
            for(let i=0;i<trials;i++){
                var cash=money;
                while(cash>0 && cash<goal){
                    bet++;
                    if(Math.random()>0.5){
                        cash++;
                    }
                    else{
                        cash--;
                    }
                }
                    if(cash==goal){
                        win++;
                    }
                    
            }
                    var winPercentage=((win/(trials))*100);
                    var lossPercentage=100-winPercentage;
                    console.log("Out of "+trials+" trials "+win+" were won:");
                    console.log("win Percentage:"+winPercentage);
                    console.log("loss percentage:"+lossPercentage);
                    console.log("Average result:"+(bet/trials));
    }
    catch(error)
         {
        console.log("error");
         }

        }
    
        module.exports={lit}