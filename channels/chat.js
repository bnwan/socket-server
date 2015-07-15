'use strict';

module.exports = function(io){
  var chat = io.of('/chat');
  return chat;
};
