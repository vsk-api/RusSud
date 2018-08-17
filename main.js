
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
 
app.get('/', function (req, res) {
  res.send('Hello World 2!');
});
 
app.get('/stop', function (req, res) {
 process.exit(143); 
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
               
