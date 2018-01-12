//We make a funciton that takes a couple paramaters, one of them being another
//function or callback.
function drinkRefill(drinkType, hasIce, callback) {

  if(!drinkType) {
    //this callback has to make us assume that we when pass this as a para, it
    //will also contain it's own parameter where this string will be applied to.
    return callback("No drink type was added!");
  }


  if(drinkType == "lemonade" && !hasIce) {
    return callback("You need ice for this drink!");
  }


  setTimeout(function() {
    //same thing here but this time we have to assume that the callback will
    //also have a 2nd parameter that this string will be applied to.
    //we use 'null' because we know later on we can use it to give us false return
    //value that we can use in a conditional statement.
    callback(null, "Your drink has been refilled!");
  }, 1000);

}
//here's the function we're going to pass as the call back to the function above
//notice that is has two parameters.
function errDrink(err, message) {
  //this won't happen untill we get true from either the fist, second, or third
  //condition from the funciton above.
  if(err) {
    console.log(new Error(err));
  } else {
    console.log(message);
  }

}

//In summary, we have to play with the idea that we'll have a function that takes
//another function as a param, and that we can pass data to that call back, and
//then later on we'll create a function that will repersent the call back and handle
//data that way.

module.exports = {
  drinkRefill: drinkRefill,
  errDrink: errDrink
}
