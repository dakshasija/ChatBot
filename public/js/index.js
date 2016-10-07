var socket = io();
var eventToUse = 'tap';
var appUrl = 'http://192.168.1.30:7000/';
var i=0;
var j=0;
$(document).ready(function() {
               makeTemplates();
               socket.on('event', function(data) {
               console.log(data);
               var m = {};
               m.text = data.name;
               $.tmpl('chatNew',m).appendTo('.resultContainer');
               var item = $('.resultContainer');
               item.scrollTop(item.get(0).scrollHeight);
          });
             socket.on('event1',function(msg) {
             console.log(msg);
             var m = {};
             m.text = msg;
             $.tmpl('chat',m).appendTo('.resultContainer');
             var item = $('.resultContainer');
             item.scrollTop(item.get(0).scrollHeight);

          })
bind('.btnSave',saveMassage);});

function saveMassage(){
    console.log("hi its save chat")
    var message={};
    if($('input').val().length>0){
    message.name = $('input').val();
    $('input').val('');
    console.log(message);
    chat.saveChat(message,function(r){
    })}
}
