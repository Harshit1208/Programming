/**
 * description:Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
 */
const input=require('readline-sync');
var stopwatch1=()=>{
    try{
        var start=input.question('Enter s to start  time');
    if(start=='s'){
        var c1=new Date();
        var n1=c1.getTime();
    }
    var end=input.question('Enter e to end time'); 
    if(end=='e'){
        var c2=new Date();
        var n2=c2.getTime();

    }  
    console.log('Elapsed  time is:' +((n2-n1)/1000)+'seconds')
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports={stopwatch1}