
var express = require('express');
var app = express(); 
var nodemailer = require('nodemailer');
 

app.get('/', function (req, res) {
  res.send('Hello World 6!');
});
 

app.get('/v1/card', function (req, res) {
 //sendM('sirik@vsk.ru', 'test', res); 
 res.json({ "card": 
           { "cardNumber": "1234567890",
           "cardState": "active" 
           }});
});

app.post('/v1/card/:id/communication', function (req, res) { 

var body = ''; 
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.get('/callback', function (req, res) {
 sendM('sirik@vsk.ru', 'callback', res); 
});


app.put('/v1/card/:id', function (req, res) { 
 
var body = '';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.post('/callback/answerLogin', function (req, res) { 

var body = '';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});
app.post('/callback/answerCalculatePolicy.xml', function (req, res) { 

var body = JSON.stringify(req.headers,"",4) + '\n';
 
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.post('/callback/answerSavePolicy.xml', function (req, res) { 

var body = JSON.stringify(req.headers,"",4) + '\n';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.post('/callback/answerBuyPolicy.xml', function (req, res) { 

var body = JSON.stringify(req.headers,"",4) + '\n';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.post('/callback/:boo/answerSavePolicy.xml', function (req, res) { 

var body = JSON.stringify(req.headers,"",4) + '\n';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'sirik@vsk.ru', body , res);
  });
});

app.post('/callback2', function (req, res) { 

var body = '';
 req.on('data', function (data) {
  body += data;
 });

 req.on('end', function () {
   sendM( 'oleg.sirik.mac@gmail.com', body , res);
  });
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
function sendM(pTo, pBody, res) {
 
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vskpartapi@gmail.com',
    pass: '!Q2w3e$R'
  }
 });
 
 var mailOptions = {
  from: 'vskpartapi@gmail.com',
  to: pTo,
  subject: 'Sending Email using Node.js',
  text: pBody
};
 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send('Error' + error);
  } else {
    res.send('Email sent: ' + info.response);
  }
});    
 
}
