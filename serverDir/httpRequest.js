const http = require('http');
const url = "http://nflarrest.com/api/v1/crime/topPlayers/DUI";

/*
USING HTTP.REQUEST();
*/

var req = http.request(url, function(res) {
  res.setEncoding('utf8');
  let body = "";
  res.on('data', function(data) {
    body += data;
  });
  res.on('end', function() {
    body = JSON.parse(body);
    console.log(`Here's another name: ${body[9].Name}. This was used with http.request()`);
  });
});

req.end();
