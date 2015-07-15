'use strict';

var io = require('socket.io')();

var users = [];

var notification = require('./channels/notification')(io);
var chat = require('./channels/chat')(io);
var todo = require('./channels/todo')(io);

var users = [];

io.on('connection', function(socket){
  console.log('CONNECTED: ', socket.id);
  users.push(socket.id);

  socket.on('disconnect', function(){
    users.pop(socket.id);
    console.log('DISCONNECTED: ', socket.id);
  });
});

notification.tick();
notification.broadcastUserCount(users.length);

io.listen(8085);
