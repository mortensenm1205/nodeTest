const http = require('http');

// const server = http.createServer();
//
// server.on('request', function(req, res) {
//   res.write("<h1>Hi World</h1>");
//   res.write("<p>Some more text</p>");
//   res.write(`<p>${res.statusMessage}</p>`);
//   res.write(req.method);
//   res.end('this has ended');
// });
//
// server.listen(9000);


const req = http.request(function(res) {
  res.on('response', function() {
    console.log("this has ended");
  });
});

req.listen(9000)
req.end();

// http.request(options, function(res) {
//   res.on('response', function(res) {
//     console.log(res.statusMessage);
//   });
//   res.read('response');
// });
