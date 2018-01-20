var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var post_data = {
  "value" : "someString"
}


// function PostData(url) {
//   var post_data = {
//     "value" : "someString"
//   }
//
//   return new Promise((resolve, reject) => {
//     if(post_data === {}) {
//       reject(new Error("whoops"));
//     }
//
//       resolve(post_data);
//
//   });
//
//
//
// }
//
// app.get('/', (req, res) => {
//   PostData('/').then((message) => {
//     res.send(message);
//   });
// })

app.post('/', (req, res) => {
  req.body = post_data;
  res.send(req.body);
});

app.get('/');

app.listen(7000, () => {
  console.log("This is now running on port 7000!");
});
