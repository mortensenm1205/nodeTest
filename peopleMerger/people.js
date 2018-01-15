var fs = require('fs');

var peoplePath = `${__dirname}/peopleFiles/`;


//I'm trying to seperate my callbacks as regular functions.
//I was able to write this one for downloading the files synchrously
//this function just returns a string.
function downloadFile(path) {
  return fs.readFileSync(path, 'utf8');
};

function createFile() {};

fs.readdir(peoplePath, 'utf8', (err, files) => {
    if(err) {
      throw err;
    }
    var fileData = "";
    files.forEach((i) => {
      //I can place the value of this f() in a variable since it's being
      //synchrously
      fileData = downloadFile(`${peoplePath}/${i}`);
      //Converting to JSON
      fileData = JSON.parse(fileData);
      //concating upon itself and then sorting
      fileData = fileData.concat(fileData).sort();
    });

    //Just a simple log to test, the next f() is writing that creates the file
    //and uses the data from the first function as the content.
    console.log(fileData);

});



//In my early code, it was outputing all the file contents as two different
//values then I was having a hard time selecting it after.
//I then guessed to download the contents of the files first SYNCHROUSLY and
//place them in variables. I then parsed it through JSON, and combined the files
//into a new one with .concat, since they returned back array's. After I had
//that then I sorted it, and had the fs module write and read the file of the
//two combined data files.
// var file1 = fs.readFileSync('./peopleFiles/people1.json', 'utf8');
// //parsing the data with JSON
// file1 = JSON.parse(file1);
//
// var file2 = fs.readFileSync('./peopleFiles/people2.json', 'utf8');
// //again here with a second file
// file2 = JSON.parse(file2);
//
// //combining them into one array with .concat, then used .sort to sort through
// //the data.
// var allFile = file1.concat(file2);
// allFile = allFile.sort();
//
// // console.log(typeof file1);
// // console.log(typeof file2, file2);
// // console.log(typeof allFile, allFile);
//
// fs.writeFile('./peopleFiles/allPeople.json', allFile, (err) => {
//   if(err) {
//     throw err;
//   }
//
//   fs.readFile('./peopleFiles/allPeople.json', 'utf8', (err, data) => {
//     console.log(data);
//   });
// });



/********

OLDER CODE I WAS TESTIN THIS PROBLEM AGAINST.

*********/
// fs.readdir('./peopleFiles/', 'utf8', (err, files) => {
//   if(err) {
//     throw err;
//   }
//   for(var i = 0; i < files.length; i++) {
//     fs.readFile(`./peopleFiles/${files[i]}`, 'utf8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//
//       //the problem is that it's happening all at once and it's seperating my
//       //values as two different lines, making it harder for me to sort and
//       //display the text correctly.
//       //might have to try synchrously with just reading the files
//       //or writing functions that hold the data and reference them as callbacks later
//       var myData = "";
//       myData = JSON.parse(data);
//
//       console.log(Object.entries(myData));
//       //you can still create a new file this way and if's already created then
//       //it still appends it. The code commented out was a way to generate this same
//       //code with fs.exists
//       // fs.appendFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
//       //   if(err) {
//       //     throw err;
//       //   }
//       // });
//
//       // fs.exists('./peopleMerger/peopleFiles/peopleComplete.json', (exists) => {
//       //   if(exists === true) {
//       //     fs.appendFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
//       //       if(err) {
//       //         throw err;
//       //       }
//       //     });
//       //   } else {
//       //     fs.writeFile('./peopleMerger/peopleFiles/peopleComplete.json', myData, (err) => {
//       //       if(err) {
//       //         throw err;
//       //       }
//       //     });
//       //   }
//       // });
//     });
//   };
// });
