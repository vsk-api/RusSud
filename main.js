
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
 
app.get('/', function (req, res) {
  res.send('Hello World 5!');
});
 

app.get('/send', function (req, res) {
 sendM("test"); 
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
function sendM(pBody) {
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vskpartapi@gmail.com',
    pass: '!Q2w3e$R'
  }
 });

 var mailOptions = {
  from: 'vskpartapi@gmail.com',
  to: 'sirik@vsk.ru',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send(error);
  } else {
    res.send('Email sent: ' + info.response);
  }
});    
 
}
