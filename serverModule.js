const http = require('http');

const server = http.createServer();


/*
  THE ONLY REQUEST / RESPONSE THAT WORKS FOR ME
*/
server.on('request', function(req, res) {
  res.write('<h1>Hi World</h1>');
  res.write('<p>Some more text</p>');
  res.write(`<p>${res.statusMessage}</p>`);
  res.write(`<p>${req.method}</p>`);
  res.end('<h2>this has ended</h2>');
});

server.listen(9000);

/*
USING HTTP.REQUEST()
*/

// const options = {
//   port: 8000
// }
//
// const req = http.request(options, function(res, req) {
//     console.log(res.headers);
// });


/*
USING HTTP.GET()
*/

// var rawData = ''
//
// http.get('http://localhost', function(response) {
//   console.log(response.headers);
//   response.on('data', function(chunk) {
//     rawData += chunk;
//   })
//   response.on('end', function() {
//     console.log(rawData);
//   })
// }).on('end', function(req, res) {
//   res.write(rawData);
// });


module.exports = server;
