/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

/*
* Modules dependencies
*/
  
var fragile = require('./fragile'),
  sys = require('sys'),
  path = require('path'),
  spawn = require('child_process').spawn;

/*
* Variable definitions
*/

var args = process.ARGV,
  files = args.slice(2),
  i = 0; // fork counter

/*
 * Jumps to another test-case by forking current process
 * when current one completes
 */

function fork () {
  var file = files[i++];
  if (file) {
    var subProcess = spawn(args[0], [args[1], file]);
    subProcess.stdout.on('data', function (data) { sys.print(data); });
    subProcess.stderr.on('data', function (data) { sys.print(data); });
    subProcess.on('exit', fork);
  }
}

/*
 * Entry point
 */

if (args.length == 3) {
  var file = args[2];
  if (file) {
    var capture = null;
    // This regex filters test cases named like 'test-foo.js'
    if (capture = file.match(/(.*(test-\w+))\.js$/)) {    
      var absFile = path.join(process.cwd(), capture[1]);
      var test = require(absFile);
      // Run test-case
      fragile.run(capture[2], test);
    }
  }
} else {
  fork();
}
