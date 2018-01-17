var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.write("Hello World");
  res.end("<h1>Too Damn easy</h1>");
});

app.post('/test', (req, res) => {
  res.send("This data is being display through the server!");
});

app.listen(9000, () => {
  console.log("This is now running on port 9000!");
});
