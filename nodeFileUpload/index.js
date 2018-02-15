'use strict'

const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 9500;
const path = require('path');

const myStorage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'docs/userDocs'));
  },

  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  }

});

const myReqHandler = multer({storage: myStorage});

app.use(express.static('public'));

app.post('/', myReqHandler.single('userImages'), (req, res) => {
  console.log(req.file);
  res.send('file uploaded');
});

app.listen(port);
