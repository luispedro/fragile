/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

var assert = require('assert');
  c = require('colors');

exports.run = function (testCase) {
  var ctx = {};
  if (testCase.setup) {
    testCase.setup.call(ctx);
  }
  for (var testName in testCase) {
    var test = testCase[testName];
    if (typeof test === 'function' && testName.match(/^test.*$/)) {
      try {
        test.call(ctx, assert);
        console.log(testName.yellow + ' ✔'.yellow);
      } catch (e) {
        console.log(testName.red + ' ✖'.red);
        console.log(e.stack.grey);
      }
    }
  }
  if (testCase.teardown) {
    testCase.teardown.call(ctx);
  }
}