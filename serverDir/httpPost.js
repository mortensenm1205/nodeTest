var http   = require('http');
var querystring = require('querystring');
var server = http.createServer();

//making a version Promise function for posting data to a server
function PostData(codeString) {
  //here is the data that will be posted
  //The idea is how you would set up the code to be posted, I did it
  //with hard code and one parameter.
  var post_data = {
      'value1' : codeString,
      'value2' : 'someExtraString'
  };

  //setting my route, or where this is going to be posted
  var post_options = {
    host: 'localhost',
    port: '9000',
    path: '/testData',
    method: 'POST'
  };

  //as always, with these versions we have return a promise.
  return new Promise((resolve, reject) => {

    if(post_data === {}) {
      reject(new Error("whoops"));
    }

    let body = "";
    //this small inline function works because all we need is to set the
    //options for the POST request and the encoding.
    var post_Req = http.request(post_options, (res) => res.setEncoding('utf8'));
    //so this is interesting, promise only accepts strings or buffers. so we have
    //stringify our data first.
    body = JSON.stringify(post_data);

    //finishing up post_Req with .write() and .end() but also including
    //Promises Resolve.
    post_Req.write(resolve(body));
    post_Req.end();
  });

};

server.on('request', (req, res) => {
  PostData("somestring").then((message) => {
    //Since we interact with original obj literal, we can't do so with a string
    //so we have to convert it BACK to an obj with .parse()
    var my_data = JSON.parse(message);
    //Then making sure, apporiate headers are set in place
    res.writeHead(200, {'Content-Type': 'application/json'});
    // And boom, outputing our results from the post_options obj with the http module
    res.write(`${my_data.value1} and ${my_data.value2} is part of the 'message' data chunk. Here it is: ${message}`);
    res.end();
  });
}).listen(9000);
