// var EventEmitter = require('events');
// //let's track telephone rings and pick up on the second
// var telephone = new EventEmitter();
// var rings = 0;
// //let the listener function be declared as a variable
// var listener = function() {
//   //increment the number of rings
//   console.log("Amount of rings: "  + rings);
//   rings++;
//   //on the second ring, we pick up
//   if(rings == 2){
//     //and remove the listener
//     telephone.removeListener('phone-ring', listener);
//   }
// };
//
// telephone.on('phone-ring', listener);
// telephone.emit('phone-ring');
// telephone.emit('phone-ring');
// telephone.emit('phone-ring');
// telephone.emit('phone-ring');
// telephone.emit('phone-ring');

//
// module.exports = {telephone: telephone};


// var EventEmitter = require('events');
// //declare a Cat type
// function Cat() {
//   //keep a reference to `this` for use in other scopes
//   var self = this;
//   //declare a method to speak that emits a message
//   //it's being defined before a new instance of EventEmitter is being done.
//   //which is fine because we plan on using it and we've done a .require()
//   self.speak = function(message){
//     self.emit('speak', message);
//   };
// }
// //inherit from `EventEmitter`, this wil make `Cat` an event emitter
// Cat.prototype = new EventEmitter();
// //create an instance of Cat
// var myCat = new Cat();
// //listen to the cat speak
// //since on line 35 makes Cat a new EventEmitter we can now have it listen
// myCat.on('speak', function(message){
//   console.log(message);
// });
// //some time later, have the cat speak
// //will trip the `speak` listener and print "meow"
// myCat.speak("bark");

var EventEmitter = require('events');
var greeter = new EventEmitter();

var greetings = function(name, age) {
  if(age < 18) {
    console.log(`Hello ${name} you seem still quite young, are you not ${age}? The child's room is over there`);
  } else {
    console.log(`Hello ${name} you have aged well, you're only ${age}? Have a beer to celebrate your youth`);
    greeter.removeListener('doorbell', greetings);
  }
}
greeter.on('doorbell', greetings);

greeter.emit('doorbell', 'Matt', '11');
greeter.emit('doorbell', 'Matt', '25');
greeter.emit('doorbell', 'Matt', '9');
greeter.emit('doorbell', 'Matt', '12');
