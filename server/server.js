var express = require('express');
var bodyParser = require('body-parser');

// var zombieLang = require('ZombieLang');

var app = express();

app.use(function(req, res, next){
  console.log((new Date()).toString() + " " + req.method + " " + req.url);
  next();
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.get('/', function(req, res){
  res.send('root');
});

app.get('/zombify', function(req, res){
   
  var data = req.query.q; 
  // data = zombieLang.convert(data);
  // console.log(data);
  
  var obj = {result : data};

  res.json(obj);
});

app.get('/unzombify', function(req, res){
  res.send('unzombify');
});



app.listen(7000, function(){
  console.log("starting server on 7000");
});

