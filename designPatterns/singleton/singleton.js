/**
 *@description:Singleton Design Pattern
 *@since:09/10/2019
 *@author: Harshit Sethi
 */
let car = function(){
    function create(){
        let running = false;
        function start(){
            running = true;
        }
        function stop(){
            running = false;
        }
        function state(){
            return running?"running":"notRunning";
        }
        return{
            start1:start,
            stop1:stop,
            state:state
        }
    }
    let carInstance;
    return{
        getInstance: function(){
            if(!carInstance){
                carInstance = create();
            }
            return carInstance;
        }
    }
}

const cars = new car()
var car1 = cars.getInstance();
var car2 = cars.getInstance();
car1.start1();
car2.stop1();
console.log(car1.state());
