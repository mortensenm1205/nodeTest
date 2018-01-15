var fs = require('fs');

//make some content
var myContent = "How are you today?\n";
var moreContent = "some stupid text that I added";

//write that content to `helloworld.txt`
//if you keep calling it then it replaces the data in the file
fs.writeFile('./helloworld.txt', myContent, function(err){
  //check for possible errors
  if (err) {
    //log that an error happened
    console.log(`there was a problem writing: ${err}`);
    //throw the error for handling by the caller
    throw err;
  }
  //otherwise, print a success message
  console.log('content written.');
});

//adding some more data to be appened to helloworld.txt
fs.appendFile('./helloworld.txt', moreContent, (err) => {
  if(err) {
    console.log(`there was an error! Check it: ${err}`);
  }

  console.log('Content has been appeneded');
});

//reading that file
fs.readFile('./helloworld.txt', 'utf-8', function(err, data){
  //check for possible errors - more on this later
  if (err) {
    //log that an error happened
    console.log(`an error occurred: ${err}`);
    //throw the error for handling by the caller
    throw err;
  }
  //otherwise, print the contents of the file
  console.log(data);
});
