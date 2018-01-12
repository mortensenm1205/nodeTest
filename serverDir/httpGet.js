const http = require('http');
const url = "http://nflarrest.com/api/v1/crime/topPlayers/DUI";

/*
USING HTTP.GET()
*/

http.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(`Here's a name: ${body[5].Name}. This was used with http.get()`);
  });
});




// module.exports = server;
