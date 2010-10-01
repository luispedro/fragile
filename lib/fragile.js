/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

var assert = require('assert'),
  sys = require('sys');

require('colors');

exports.run = function (testSuite) {
  
  var i = 0, j = 0,
    testCaseNames = Object.keys(testSuite),
    cuurentTestCaseName = null,
    testNames = null,
    currentTestName = null;

  function nextTestCase () {
    j = 0;
    currentTestCaseName = testCaseNames[i++];
    if (currentTestCaseName) {
      sys.puts(currentTestCaseName.magenta);
      sys.puts('----------------------------------------'.magenta);
      testNames = Object.keys(testSuite[currentTestCaseName]);
      nextTest();
    }
  }
  
  function nextTest () {
    currentTestName = testNames[j++];
    if (currentTestName) {
      testSuite[currentTestCaseName][currentTestName](done);
    } else {
      nextTestCase();
    }
  }

  function done (e) {
    if (e) {
      sys.puts(currentTestName.red + ' ✖'.red);
      if (e.message)
        sys.puts(e.message.grey);
      if (e.stack && process.env.PRINT_STACK_TRACE)
        sys.puts(e.stack.grey);
    } else {
      sys.puts(currentTestName.yellow + ' ✔'.yellow);
    }
    nextTest();
  }
  
  process.on('uncaughtException', done);
  
  nextTestCase();
};
