const http = require('http');

const server = http.createServer();

server.on('request', function(req, res) {
  res.end("<h1>Hello World</h1>");
});

server.listen(7227);

console.log("myServ hasa finished sending the response");
