/**
 *@description:Implement a simple topic and observers can register to this topic. Whenever any new message will be posted to the topic, all the registers observers will be notified and they can consume the message. 
 */
class Subject {
    constructor() {
      this.observers = []
    }
  
    subscribe(observer) {
      this.observers.push(observer)
    }
    notifyAll() {    this.observers.map(observer => observer.notify())  }
}
class Observer {
    constructor(name) {
      this.name = name
    }
  
    notify() {
      console.log(`${this.name} is notified`)
    }
  }
  
  module.exports = {Observer,Subject}

