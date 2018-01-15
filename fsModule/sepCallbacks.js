var fs = require('fs');

function readFile(err, content) {
  if(err) {
    throw err;
  }

  console.log(content);
}

function readDir(err, files) {
  if(err) {
    throw err;
  }

  files.forEach((i) => {
    fs.readFile(`${__dirname}/txtFiles/${i}`, 'utf8', readFile);
  });
}

fs.readdir('./txtFiles', 'utf8', readDir);
