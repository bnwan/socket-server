'use strict';

var _ = require('lodash');

module.exports = Notification;

var users = [];

function Notification(io){
  if(!(this instanceof Notification)){
    return new Notification(io);
  }

  this.channel = io.of('/notification');

  this.channel.on('connection', function(socket){
    socket.on('disconnect', function(){
    });
  });
}

Notification.prototype.tick = function(){
  var tick = 0;
  setInterval(function(){
    this.channel.emit('tick', {tick: tick++});
  }.bind(this), 100000);
};

Notification.prototype.broadcastUserCount = function(data){
  this.channel.emit('user:count', data);
};
