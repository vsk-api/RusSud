
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
 
app.get('/', function (req, res) {
  res.send('Hello World 3!');
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
    user: 'vsp_partapi@gmail.com',
    pass: '!Q2w3e$R'
  }
 });

 var mailOptions = {
  from: 'hz@gmail.com',
  to: 'sirik@vsk.ru',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});               
}
