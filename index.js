var module = require('./myModule');
var server = require('./serverModule.js');
var myCallback = require('./callbackModule.js');

// console.log(module.helloDay("Matt", "it is a beautiful day"));

console.log(myCallback.drinkRefill("lemonade", true, myCallback.errDrink));
