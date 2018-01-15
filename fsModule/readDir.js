var fs = require('fs');

//reading through a directory and then display each file in that dir.
//using a loop
fs.readdir('./txtFiles', 'utf8', (err, files) => {
  if(err) {
    console.log(`An error occured: ${err}`)
  };
  for(var i = 0; i < files.length; i++) {
    //even though we're trying to read the files in this './txtFiles' we still
    //have to list out the whole path when trying to read it
    fs.readFile(`./txtFiles/${files[i]}`, 'utf-8', (err, data) => {
      if(err) {
        console.log(`Error: ${err}`);
      }
      console.log(data);
    });
  };
});
