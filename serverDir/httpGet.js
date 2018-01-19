const http = require('http');
const url = "http://nflarrest.com/api/v1/crime/topPlayers/DUI";

/*
USING HTTP.GET()
*/

//Using a promise version of htt.get();
function storingData(url) {
  let body = "";
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding('utf8');
      res.on('data', (data) => {
        body += data;
      });

      res.on('end', () => {
        resolve(body);
      });
    });
  });
}

//creating a server for clients(localhost) to call out to
var myServer = http.createServer((req, res) => {
  //then using .then for the http.get() promise version
  res.writeHead(200, {'Content-Type':'text/plain'});
  storingData(url).then((message) => {
    var my_data = JSON.parse(message);
    res.write(`${my_data[0].Name} and with an arrest count of ${my_data[0].arrest_count}\n`);
    res.write(`${my_data[3].Name} and with an arrest count of ${my_data[3].arrest_count}\n`);

    res.end();
  })
});

myServer.listen(9000);


//The response is a long string of multiple objects. I thought doing JSON
//would work but it gives me an error
//exporting it out
module.exports = {myServer: myServer}
