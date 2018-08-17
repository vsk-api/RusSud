
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
 

app.get('/', function (req, res) {
  res.send('Hello World 6!');
});
 

app.get('/send', function (req, res) {
 console.log('send1');
 sendM("test", res); 
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
function sendM(pBody, res) {
 console.log('sendM#1');
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vskpartapi@gmail.com',
    pass: '!Q2w3e$R'
  }
 });
 console.log('sendM#2');
 var mailOptions = {
  from: 'vskpartapi@gmail.com',
  to: 'oleg.sirik.mac@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
 console.log('sendM#3');
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send('Error' + error);
  } else {
    res.send('Email sent: ' + info.response);
  }
});    
 
}
