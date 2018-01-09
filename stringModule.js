var str = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
var sec = 500;


function strInterval() {
  for(var i = 10; i > 0; i--) {
    setTimeout(function() {
      str.pop();
      console.log(str.join(" "));
    }, sec * i);
  }
}

strInterval();
