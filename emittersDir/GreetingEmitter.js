//we're using the build in node module, events. It takes an instance funciton
//called EventEmitter(), here we're setting it to greeter. The idea is have the
//listener stop listening after two doorbell emitters.
var EventEmitter = require('events');
var greeter = new EventEmitter();

var greetings = function(name, age) {
  if(age < 18) {
    console.log(`Hello ${name} you seem still quite young, are you not ${age}? The child's room is over there`);
  } else {
    //wanted to remove it here, assuming that another person would come by and is acutally over 18.
    console.log(`Hello ${name} you have aged well, you're only ${age}? Have a beer to celebrate your youth`);
    greeter.removeListener('doorbell', greetings);
  }
}
//only one listener but having the callback function determine how to seperate
//people.
greeter.on('doorbell', greetings);

//anything else after the 2nd emitter gets ignored.
greeter.emit('doorbell', 'Matt', '11');
greeter.emit('doorbell', 'Matt', '25');
greeter.emit('doorbell', 'Matt', '9');
greeter.emit('doorbell', 'Matt', '12');
