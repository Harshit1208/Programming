/**
 *@description:Factory Design Pattern
 *@since:09/10/2019
 *@author: Harshit Sethi
 */
class computer{
    constructor(ram ,hdd , processor){
        this.ram = ram;
        this.processor = processor;
        this.hdd = hdd;
    }
}
var factory= (type , ram, hdd , processor) =>{
this.type = type;
if(type == "pc"){
    var pc = new computer(ram , hdd , processor);
    console.log(type + " : ");
    console.log(pc.ram + " ram , " + pc.hdd + " hdd , " + pc.processor + " processor . ");
}
if(type == "server"){
    var server = new computer(ram , hdd , processor);
    console.log(type +  " : ");
    console.log(server.ram + " ram , "+ server.hdd + " hdd , " + server.processor + " processor . ");
  }
}
factory("server" , "2 gb" , "500 gb" , "17 gb");
factory("pc" , "3 gb" , "585 gb" , "19 gb");
