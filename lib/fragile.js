/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

var assert = require('assert'),
  sys = require('sys');

require('colors');

exports.run = function (name, test) {
  var i = 0,
    keys = Object.keys(test);
    currentKey = null;
  
  function nextTest () {
    currentKey = keys[i++];
    if (currentKey)
      test[currentKey](done);
  }

  function done (e) {
    if (e) {
      sys.puts(currentKey.red + ' ✖'.red);
      if (e.message)
        sys.puts(e.message.grey);
      if (e.stack && process.env.PRINT_STACK_TRACE)
        sys.puts(e.stack.grey);
    } else {
      sys.puts(currentKey.yellow + ' ✔'.yellow);
    }
    nextTest();
  }
  
  process.on('uncaughtException', done);
  
  sys.puts(name.cyan + ':');
  nextTest();
};
