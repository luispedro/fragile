/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */
var fragile = require('./fragile'),
  sys = require('sys'),
  path = require('path'),
  spawn = require('child_process').spawn;

var args = process.ARGV,
  files = args.slice(2);

var i = 0;
function next () {
  var file = files[i++];
  if (file) {
    var fork = spawn(args[0], [args[1], file]);
    fork.on('exit', function (code) {
      next();
    });
  }
}

if (args.length == 3) {
  var file = args[3];
  if (file) {
    var capture = null;
    if (capture = file.match(/(\w+\/(test-\w+))\.js$/)) {    
      var absFile = path.join(process.cwd(), capture[1]);
      var test = require(absFile);
      console.log(capture[2], test);
      fragile.run(capture[2], test);
    }
  }  
} else {
  next();  
}