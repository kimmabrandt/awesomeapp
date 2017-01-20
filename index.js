var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.render('./views/index.html');
});

app.get('/about', function(req, res) {
  res.render('./views/about.html');
});

app.get('/article', function(req,res) {
  res.render('./views/article.html');
});


app.listen(3000);
