var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var markdownTransformer = require('./markdownTransformer');
var zombieLang = require('./ZombieLang');
var logger = require('./logger');


var app = express();

var handleMarkdown = function(filename, res){
  res.set('Content-Type', 'text/html');
  res.status(200);
  var file = fs.createReadStream(filename);
  file.pipe(markdownTransformer()).pipe(res);
};

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});



app.use(function(req, res, next){

  res.on("finish", function() {
    logger(req, res);
  });
  next();

});

app.get('/', function(req, res){
  handleMarkdown('readme.md', res);
});

app.get('/zombify', function(req, res){

  var data = req.query.q; 

  if (data.length > 1000) {
    res.status(414).json({ "status": 414, "message": "Whoa there! Long winded huh?"});
    return; 
  }

  data = zombieLang.zombify(data);
  
  var obj = {result : data};

  res.json(obj);
});

app.get('/unzombify', function(req, res){
  var data = req.query.q; 

  if (data.length > 1000) {
    res.status(414).json({ "status": 414, "message": "Whoa there! Long winded huh?"});
    return; 
  }

  data = zombieLang.unzombify(data);
  
  var obj = {result : data};

  res.json(obj);
});

app.use(function(req, res) {
     res.status(404).json({ "status": 404, "message": "No page for you"});
});

app.listen(7000, function(){
  console.log("starting server on 7000");
});

