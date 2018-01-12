const http = require('http');
const server = http.createServer();

/*
  THE ONLY REQUEST / RESPONSE THAT WORKS FOR ME when writing random stuff to
  an HTML page.
*/

//something I noticed is that the console.logs within my .on() are being repeated
//twice.
server.on('request', function(req, res) {
  console.log("1st text");
  res.write('<h1>Hi World</h1>');
  res.write('<p>Some more text</p>');
  res.write(`<p>${res.statusMessage}</p>`);
  res.write(`<p>${req.method}</p>`);
  res.end('<h2>this has ended</h2>');
});

server.on('request', function(res) {
  console.log("sometext");
});


//After trying to emit the 'request' it gave me back errors saying .write and .end()
//are not functions but if i don't use this statement then everything works fine.
server.emit('request');

server.listen(9000);
