var cheerio = require('cheerio');
var needle = require('needle');
 
var nodeMailer = require('nodemailer'),
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.get('/stop', function (req, res) {
 process.exit(143); 
});

app.get('/arbitr/:id', function (req, res) {
  getKadArbitr( req.params.id, res );
  //res.send('Hello World!');
});

app.post('/sendmail', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'vsk.partapi@gmail.com',
              pass: '!Q2w3e$R'
          }
      });
      let mailOptions = {
          from: '"Test" <xvsk.partapi@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
function getKadArbitr(pUID, res) {
   
                var vData =[];
                var myURL = 'http://kad.arbitr.ru/Card/' + pUID;
 
                var options = {
                               headers:{
                               'Host': 'kad.arbitr.ru',
                               'Connection': 'keep-alive',
                               'Accept': '*/*',
                               'Origin': 'http://kad.arbitr.ru',
                               'x-date-format': 'iso',
                               'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
                               'Content-Type': 'text/*; charset=utf-8',
                               'Referer': 'http://kad.arbitr.ru/',
                               'Accept-Encoding': 'gzip, deflate',
                               'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'
                               }
                }
               
                var case_status = "not found";
               
                console.log('start');
                needle.get( myURL, options, function (err, res2){
                               //results.push(res2.body);
                 //              console.log(err);
                //               console.log(res2.body);
               
                try { 
                 
                    var $ = cheerio.load(res2.body);                                                    
                              
                    case_status = $('div[class=b-case-header-desc]').text().trim();
                    res.send(case_status);
                            
                } catch (err) {
                    res.send(err);
                }  
                               console.log(err);
 
                });
               
}
