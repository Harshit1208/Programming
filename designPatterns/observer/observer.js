/**
 *@description:Implement a simple topic and observers can register to this topic. Whenever any new message will be posted to the topic, all the registers observers will be notified and they can consume the message.
 *@since:09/11/2019
 *@author: Harshit Sethi
 */
const input= require("../observer/observerBl");
const observable = new input.Subject()
const observer1 = new input.Observer('First')
const observer2 = new input.Observer('Second')
const observer3 = new input.Observer('Third')
observable.subscribe(observer1)
observable.subscribe(observer2)
observable.subscribe(observer3)

observable.notifyAll()