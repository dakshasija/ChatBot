var unirest = require('unirest');
var portNumber = 7000;
var express = require('express');
var serverName = '192.168.1.12/';
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var server = app.listen(portNumber);
var childProcess = require('child_process');
var exec = require('child_process').exec;
var stdin = process.openStdin();
var natural = require('natural');
var bayes = require('bayes');
var now = require('now');
var classifier = bayes();
var things = require("./public/js/file");
var now = require("./public/js/days");
var prev_token=null;
var myString;
var i = 0;
var r;


var socket = require('socket.io').listen(server,function(){
    console.log('server listening at ' + portNumber);
});
app.use(bodyParser.json());
app.use(express.static('public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + "/public/views/index.html")
});
socket.on('connection', function(socket){
        console.log('server listening at ' + portNumber);
});

app.post('/saveChat', function(req, res) {
    console.log('saveChat');
    var r = req.body;
    socket.emit('event',r);
    setTimeout(function() {
    myString = r.name;
    var str = myString.toLowerCase();
    var token=things.getfile(str);
    setTimeout(function(){
    if (token=='c3'||token=='c15') {
     url=('https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q='+str);
     childProcess.spawn('C:\\Program Files (x86)\\Legpat\\Application\\chrome.exe', ['-new-tab',url]);
   }
 },3000);
 if (token=='c24') {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var resp=hour + ":" + min + ":" + sec;
    res.json(resp);
    socket.emit('event1',resp);
    return 0;
 }
 if (token=='c') {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    var resp=year + ":" + month + ":" + day;
    res.json(resp);
    socket.emit('event1',resp);
    return 0;
 }
 if (token=='day') {
   var now = new Date();
   var day = now.getDayName();
   var month = now.getMonthName();
   res.json(day);
   socket.emit('event1',day);
   return 0;
 }
 if (token=='days') {
   var date = new Date();
   var now = new Date();
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   month = (month < 10 ? "0" : "") + month;
   var day  = date.getDate();
   day = (day < 10 ? "0" : "") + day;
   var da = now.getDayName();
  var resp=da+ "," +year + ":" + month + ":" + day;
   res.json(resp);
   socket.emit('event1',resp);
   return 0;
 }
 if (token=='ss') {
   unirest.get("https://simple-weather.p.mashape.com/weather?lat=28.6139&lng=77.2090")
   .header("X-Mashape-Key", "Ri4j5gX4ORmshweHbjBSUUMevXWIp1i0xRujsnjCz7wW9w5zLB")
   .end(function (result) {
     var t= result.body;
     res.json(t);
     socket.emit('event1',t);
     console.log(t);
   });
   return 0;
 }
   MongoClient.connect('mongodb://192.168.1.30:27017/chatBot', function(err, db) {
   var collection = db.collection('bot');
   if(token=='c11'){
     collection.find({catname:token}).toArray(function(err, items) {
    if (i<items.length) {
      var resp=items[i].catresponce;
      res.json(resp);
      socket.emit('event1',resp);
      db.close();
      i=i+1;
      }
  else{
     i=0;
     var resp=items[i].catresponce;
     res.json(resp);
     socket.emit('event1',resp);
     db.close();
     i=i+1;
   }
   });
   }
   if (prev_token==token||prev_token==null) {
      collection.find({catname:token}).toArray(function(err, items) {
     if (i<items.length) {
       var resp=items[i].catresponce;
       res.json(resp);
       socket.emit('event1',resp);
       db.close();
       i=i+1;
       }
   else{
      i=0;
      var resp=items[i].catresponce;
      res.json(resp);
      socket.emit('event1',resp);
      db.close();
      i=i+1;
    }
    prev_token=token;
    });
  }
   else{
        collection.find({catname:token}).toArray(function(err, items) {
        i=0;
        var resp=items[i].catresponce;
        res.json(resp);
        socket.emit('event1',resp);
        db.close();
        i=i+1;
    });
    prev_token=token;
  }
  });
},1000);
});
