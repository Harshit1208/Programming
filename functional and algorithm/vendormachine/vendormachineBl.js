/**
 * @description:Vendor machine of 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes 
 * @param {*} amnt 
 */
var count=(amnt) =>{
    try{
        notes=[1000,500,100,50,10,5,2,1]
    notecounter=[0,0,0,0,0,0,0,0]
    for(i=0;i<8;i++){
        if(amnt>=notes[i]){
            notecounter[i]=Math.floor(amnt/notes[i]);
            amnt=amnt-notecounter[i]*notes[i];
        }
    }
    for(i=0;i<8;i++){
        if(notecounter[i]!=0){
            console.log(notes[i]+ ": no of notes are " +notecounter[i]); 
        }
    }
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={count}