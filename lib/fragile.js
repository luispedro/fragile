/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */


var assert = require('assert'),
  sys = require('sys');

require('colors')

var i = 0,
  testCase = null,
  testNames = null,
  currentTestName = null;

function next () {
  currentTestName = testNames[i++];
  if (currentTestName) { 
    testCase[currentTestName](done);
  }
}

function printResult (e) {
  if (e) {
    sys.puts(currentTestName.red + ' ✖'.red);
    if (e.message)
      sys.puts(e.message.grey);
    if (e.stack && process.env.PRINT_STACK_TRACE)
      sys.puts(e.stack.grey);
  } else {
    sys.puts(currentTestName.yellow + ' ✔'.yellow);
  }
}

process.on('uncaughtException', function (e) {
  printResult(e);
  next();
});

function done () {
  printResult();
  next();
}

exports.run = function (tc) {
  testCase = tc;
  testNames = Object.keys(testCase);
  next();
};
