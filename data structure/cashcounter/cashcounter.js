/** 
* @purpose : To simulate banking cash counter.
* @description : Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
* @since : 08/28/2019
* @author : Harshit Sethi
*/
const input=require('readline-sync');
const strObj=require('../cashcounter/cashcounterBl');
let num = input.questionInt("Enter the number of people: ");
var cashBalance=100000;
var wi= new strObj.Queue();
var di= new strObj.Queue();
for(var i=0;i<num;i++){
    var choice=input.question("Withdrawal or Deposit ");
    if(choice=='W'){
       wi.enqueue(1);
    }
    if(choice=='D'){
        di.enqueue(2);
     }
    }
    while(wi.size()!=0){
        wi.dequeue();
        var amt=input.questionInt("Enter amount: ");
        cashBalance=cashBalance-amt;
        console.log("Cash balance is "+cashBalance);
    }
    while(di.size()!=0){
        di.dequeue();
        var amt=input.questionInt("Enter amount: ");
        cashBalance=cashBalance+amt;
        console.log("Cash balance is "+cashBalance);
    }
    