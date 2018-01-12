//using the events module again. Here we wanna show innheratience with events,
//and how functions can be turned into event emitters
var EventEmitter = require('events');
//declare a Cat constructor
function Cat() {
  //declare a method to speak that emits a message with the event .emit()
  //it's being defined before a new instance of EventEmitter is being done.
  //which is fine because we plan on using it later
  //we've also had speak take in a parameter.
  this.speak = function(message){
    this.emit('speak', message);
  };
}
//inherit from `EventEmitter`, this wil make `Cat` an event emitter
Cat.prototype = new EventEmitter();
//create an instance of Cat, but it'll be considered an EventEmitter now
var myCat = new Cat();
//listen to the cat speak
//since on line 15 makes Cat a new EventEmitter we can now have it listen
myCat.on('speak', function(message){
  console.log(message);
});
//some time later, have the cat speak
//will trip the `speak` listener and print whatever the 'message' para is.
myCat.speak("bark");

//so we created a emit function and what we wanted to happen before we used
//the .on() listener. Been noticing that you'll be writting code that does something
//because of some extra functional help or whatever but at that moment it isn't
//defined untill later down in the page.
