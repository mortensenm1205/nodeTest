const http = require('http');

// const server = http.createServer();


/*
  THE ONLY REQUEST / RESPONSE THAT WORKS FOR ME
*/
// server.on('request', function(req, res) {
//   console.log("sometext in the 1st .on");
//   res.on()
//   res.write('<h1>Hi World</h1>');
//   res.write('<p>Some more text</p>');
//   res.write(`<p>${res.statusMessage}</p>`);
//   res.write(`<p>${req.method}</p>`);
//   res.end('<h2>this has ended</h2>');
// });
//
// server.on('request', function(res) {
//   console.log("sometext");
// });

// server.listen(9000);

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

var jSon;

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET',
};

var req = http.request(options, function(response) {
  // response.setEncoding('utf8');
  response.on('data', function(chunk) {
    jSon += JSON.parse(chunk);
  });

  response.on('end', function() {
    console.log(jSon);
  });
});

req.end();

// module.exports = server;
