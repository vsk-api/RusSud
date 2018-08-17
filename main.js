var cheerio = require('cheerio');
var needle = require('needle');
 


var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.get('/stop', function (req, res) {
 process.exit(143); 
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
 
               
}
