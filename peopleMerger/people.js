var fs = require('fs');

fs.readdir('./peopleMerger/peopleFiles/', 'utf8', (err, files) => {
  if(err) {
    throw err;
  }
  for(var i = 0; i < files.length; i++) {
    fs.readFile(`./peopleMerger/peopleFiles/${files[i]}`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      //the problem is that it's happening all at once and it's seperating my
      //values as two different lines, making it harder for me to sort and
      //display the text correctly.
      //might have to try synchrously with just reading the files
      //or writing functions that hold the data and reference them as callbacks later
      var myData = "";
      myData = JSON.parse(data);

      console.log(myData);
      //you can still create a new file this way and if's already created then
      //it still appends it. The code commented out was a way to generate this same
      //code with fs.exists
      fs.appendFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
        if(err) {
          throw err;
        }
      });

      // fs.exists('./peopleMerger/peopleFiles/peopleComplete.json', (exists) => {
      //   if(exists === true) {
      //     fs.appendFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
      //       if(err) {
      //         throw err;
      //       }
      //     });
      //   } else {
      //     fs.writeFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
      //       if(err) {
      //         throw err;
      //       }
      //     });
      //   }
      // });
    });
  };
});
