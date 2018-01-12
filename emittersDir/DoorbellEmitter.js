//let's track telephone rings and pick up on the second
//same modules being set up as the last two examples.
var EventEmitter = require('events');
var telephone = new EventEmitter();

var rings = 0;
//let the listener function be declared as a variable
var listener = function() {
  //Seeing what my 'rings' would be at before the increment
  //increment the number of rings
  console.log("Amount of rings: "  + rings);
  rings++;
  //on the second ring, we pick up
  if(rings == 2){
    //and remove the listener
    //almost done like in "GreetingEmitter", we wanted to control the events and
    //how they'll be listened for, acted upon, and removed.
    telephone.removeListener('phone-ring', listener);
  }
};

telephone.on('phone-ring', listener);

//here we can test to see if the .removeListener() was done correctly, if only 2
//'phone-ring's go through.
telephone.emit('phone-ring');
telephone.emit('phone-ring');
telephone.emit('phone-ring');
telephone.emit('phone-ring');
telephone.emit('phone-ring');


module.exports = {telephone: telephone};
