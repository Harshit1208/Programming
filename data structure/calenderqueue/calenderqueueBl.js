/**
 * @description enter year and month
 * @param
 */
const leapObject = require("/home/user/Desktop/Harshit Sethi/functional and algorithm/leap year/leapyearBl")
const queueObject = require('../cashcounter/cashcounterBl')
var calender = (month,year) =>{
var monthNameQueue = new queueObject.Queue();
monthNameQueue.enqueue("january");
monthNameQueue.enqueue("febuary");
monthNameQueue.enqueue("march");
monthNameQueue.enqueue("april");
monthNameQueue.enqueue("may");
monthNameQueue.enqueue("june");
monthNameQueue.enqueue("july");
monthNameQueue.enqueue("august");
monthNameQueue.enqueue("september");
monthNameQueue.enqueue("october");
monthNameQueue.enqueue("november");
monthNameQueue.enqueue("december");
console.log("------------------")
    for(var i=1;i<month;i++){
        monthNameQueue.dequeue()
    }
    console.log(monthNameQueue.front()+" "+year)
    console.log("S  M  T  W  T  F  S")
    var count = 1;
    var pass = 1;
    var day = new queueObject.Queue();
    var leap = leapObject.leapYear(year)
    var monthdays = 0;
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        monthdays = 31;

    }
    else if(month == 4 || month == 6 || month == 9 || month == 11 ){
        monthdays = 30;
    }
    else{
        if(leap == "leap year"){
            monthdays = 29;
        }
        else{
            monthdays = 28;
        }
    }
    var date = (year+"-"+month).toString();
    var d = new Date(date);
    var weekday=d.getDay();
    for(var i=0;i<37;i++){
        if(pass>=weekday+1 && count<=monthdays){
            if(count<10){
                day.enqueue("0"+count.toString());
            }
            else{
                day.enqueue(count.toString());
            }
            count++;
        }
        else{
            day.enqueue("  ");
            pass++
        }
    }
    newline=1
    str = ""
    for(var i=0;i<37;i++){
        str = str + day.dequeue() + " ";
        if(newline%7==0){
            console.log(str);
            str = ""
        }
        newline++;
    }
}
module.exports = {calender}