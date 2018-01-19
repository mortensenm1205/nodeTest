var fs = require('fs');
var Promise = require('promise');

//using readdir and readfile within a promise to output the same results as
//readDir.js but this time all done with a promise. The problem i'm having is
//output a promise with more than one value.
//I think creating functions that handle just data and return data as a result
//then that might be a good start.
// var dirPromise = new Promise((res, rej) => {
//   fs.readdir('./txtFiles', 'utf8', (err, files) => {
//     if(err) {
//       console.log(`Some error: ${err}`);
//     }
//     var allData;
//     for(var i = 0; i < files.length; i++) {
//       fs.readFile(`./txtFiles/${files[i]}`, 'utf-8', (err, data) => {
//         if(err) {
//           console.log(`Error: ${err}`);
//         }
//         //this should allow me to output all file contents within the readdir
//         //but done with a promise. Done this way only outputs one file's content
//         //if i do this in a console it outputs both file's contents
//         res(data);
//       });
//     };
//   });
// });


function readThemFiles(filename) {
  return new Promise((success, reject) => {
    fs.readdir(filename, 'utf8', (err, files) => {
      if(err) {
        reject(err);
      }
      var myData = [];
      files.forEach((file) => {
        fs.readFile(`${filename}/${file}`, 'utf8', (err, data) => {
          if(err) {
            throw err;
          }
          if(myData.length < 1) {
            myData.push(data);
          } else {
            success([myData]);
          }
        })
      })

    });
  });
};

readThemFiles(`${__dirname}/txtFiles`).then((value) => {
  console.log(value);
});
