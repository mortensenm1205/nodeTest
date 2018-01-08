var http = require('http');
var eventEmitter = require('events');

http.createServer(function(req, res) {
  // res.on('end', function() {
  //   console.log("hello")
  // });

  http.on('start', function() {
    console.log("something");
  });

}).listen(7227);



console.log("myServ hasa finished sending the response")
