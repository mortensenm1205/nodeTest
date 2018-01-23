var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var someStringData;
var justData;

var postedData = (req,res,next) => {
  var post_data = {
    "value1": "someString"
  };

  req.body = post_data;
  next();
};

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(postedData);

// app.use('/', express.static('public'));

/*
  Handling multiple handler functions with same route endpoint by chainging
  them together, also tried to have each one display to data to the endpoint
  but couldnt find a way to get around the request-response cycle when it came
  to displaying data.
*/
// app.get('/', function (req, res, next) {
//   console.log('ID:', req.params);
//   next();
// }, function (req, res, next) {
//   res.send('User Info');
//   next();
// })
//
// app.get('/', function (req, res, next) {
//   console.log('some Info');
// })

/*
  Here i am testing how to use multiple handler functions with the data
  from postedData
*/
app.get('/', (req, res, next) => {
  console.log("About to start");
  someStringData = JSON.stringify(req.body) + " " + req.method;
  justData = JSON.stringify(req.body);
  res.write("someDummyText");
  next();
});

app.get('/', (req, res, next) => {
  // justData += " and alongside " + someStringData;
  res.write(justData + " this");
  next();
}, function(req, res) {
  res.write(justData + " this");
  res.end();
});

app.listen(7000, () => {
  console.log("This is now running on port 7000!");
});
