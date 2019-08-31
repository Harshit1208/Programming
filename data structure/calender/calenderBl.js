/**
 *@description : Calender 
 */
const leapObject = require("/home/user/Desktop/Harshit Sethi/functional and algorithm/leap year/leapyearBl")
var calender = (month,year) =>{
    var monthName = ["january","febuary","march","april","may","june","july","august","september","october","november","december"]
    console.log("------------------")
    console.log(monthName[month-1]+" "+year)
    console.log("S  M  T  W  T  F  S")
    var count = 1;
    var pass = 1;
    var arr = [];
    for(var i=0;i<6;i++){
        arr[i]=[]
    }
    var leap = leapObject.leapyear(year)
    var monthdays = 0;
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        monthdays = 31;

    }
    else if(month == 4 || month == 6 || month == 9 || month == 11 ){
        monthdays = 30;
    }
    else{
        if(leap == "leap year:"){
            monthdays = 29;
        }
        else{
            monthdays = 28;
        }
    }
    var date = (year+"-"+month).toString();
    var d = new Date(date);
    var weekday=d.getDay();
    for(var i=0;i<6;i++){
        for(var j=0;j<7;j++){
            if(pass>=weekday+1 && count<=monthdays){
                if(count<10){
                    arr[i][j]="0"+count;
                }
                else{
                    arr[i][j]=count;
                }
                count++;
            }
            else{
                arr[i][j]="  ";
                pass++
            }
        }
    }

    for(var i=0;i<6;i++){
       var str=""
       for(var j=0;j<7;j++){
           str=str+arr[i][j]+" ";
       }
       console.log(str);
    }
}
module.exports = {calender}