function drinkRefill(drinkType, hasIce, callback) {

  if(!drinkType) {
    return callback("No drink type was added!");
  }


  if(drinkType == "lemonade" && !hasIce) {
    return callback("You need ice for this drink!");
  }


  setTimeout(function() {
    callback(null, "Your drink has been refilled!");
  }, 1000);

}

function errDrink(err, message) {

  if(err) {
    console.log(new Error(err));
  } else {
    console.log(message);
  }

}

module.exports = {
  drinkRefill: drinkRefill,
  errDrink: errDrink
}
