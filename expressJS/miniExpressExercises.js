var express = require('express');
var app = express();

var fName = "Bob";
var lName = "Mortensen";

app.get('/a(pp)?le', (req, res) => {
  res.send("Apple or Ale?");
});

app.get('/who+a+', (req, res) => {
  res.send("I know, right?");
});

app.get('/:firstname/:lastname', (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.get('/hello', (req, res) => {
  res.send(`My guy! Hey ${req.query.firstname} ${req.query.lastname}`);
});

app.get('/:word', (req, res) => {
  res.send(req.params.word.split("").reverse().join(""));
});



app.listen(5000);
