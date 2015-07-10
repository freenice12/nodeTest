/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var path = require('path');

var users = require('./routes/users');

var app = express();
//__dirname은 최상단 저장 글로벌 변수
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// 스태틱 관련 셋팅
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.use('/users', users);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('hi there => %s:%s', host, port);
});
