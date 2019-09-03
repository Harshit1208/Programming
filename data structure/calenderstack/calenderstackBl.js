 /**
 * @description: enter year and month
 */
const leapObject = require("/home/user/Desktop/Harshit Sethi/functional and algorithm/leap year/leapyearBl")
const stackObject = require('../stack/stackBl')
var calender = (month,year) =>{
var monthNameStack = new stackObject.Stack();
monthNameStack.push("january");
monthNameStack.push("febuary");
monthNameStack.push("march");
monthNameStack.push("april");
monthNameStack.push("may");
monthNameStack.push("june");
monthNameStack.push("july");
monthNameStack.push("august");
monthNameStack.push("september");
monthNameStack.push("october");
monthNameStack.push("november");
monthNameStack.push("december");
console.log("------------------")
    for(var i=12;i>month;i--){
        monthNameStack.pop();
    }
    console.log(monthNameStack.peek()+" "+year)
    console.log("S  M  T  W  T  F  S")
    var count = 1;
    var pass = 1;
    var day = new stackObject.Stack();
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
                day.push("0"+count.toString());
            }
            else{
                day.push(count.toString());
            }
            count++;
        }
        else{
            day.push("  ");
            pass++
        }
    }
    var newstack = new stackObject.Stack();
    while(!day.isEmpty()){
        newstack.push(day.pop())
    }
    newline=1
    str = ""
    for(var i=0;i<37;i++){
        str = str + newstack.pop() + " ";
        if(newline%7==0){
            console.log(str);
            str = ""
        }
        newline++;
    }
}
module.exports = {calender}