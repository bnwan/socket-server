'use strict';

module.exports = function(io){
  var todo = io.of('/todo');
  return todo;
};
