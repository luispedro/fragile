/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */
var fragile = require('./fragile'),
  path = require('path');

var files = process.ARGV.slice(2),
  testCases = {};

for (var i in files) {
  var file = files[i];
  var capture = null;
  if (capture = file.match(/(\w+\/(test-\w+))\.js$/)) {
    var absFile = path.join(process.cwd(), capture[1]);
    var testCase = require(absFile);
    testCases[capture[2]] = testCase;
  }
}

fragile.run(testCases);