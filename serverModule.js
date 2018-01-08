const http = require('http');
const Emitter = require('events');

var myEmitter = new Emitter();

var myServ = http.createServer(function(req, res) {
  // res.on('end', function() {
  //   console.log("hello")
  // });

  myEmitter.on('start', function() {
    res.end("<h1>Hello World!</h1>");
  });

  myEmitter.emit('start');

});

myServ.listen(7227);



console.log("myServ hasa finished sending the response")
