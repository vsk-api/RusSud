var cheerio = require('cheerio');
var needle = require('needle');
 
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.get('/arbitr/:id', function (req, res) {
  getKadArbitr( req.params.id, res );
  //res.send('Hello World!');
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
                              
                } catch (err) {}  
                               console.log(err);
 
                });
               
}
