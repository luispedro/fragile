/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

/*
* Modules dependencies
*/

var sys = require('sys');
require('colors');
try {
    /*
    * Test for presence of coffee-script
    */
    require('coffee-script');
} catch (err) {
    // Ignore
}

/*
* Run given test case object with the given name
*/

exports.run = function (name, test) {
  var i = 0, errCnt = 0,
    keys = Object.keys(test);
    currentKey = null;

  /*
  * Jump to other test
  */  
  function nextTest () {
    currentKey = keys[i++];
    if (currentKey) {
      test[currentKey](done);
    } else {
      sys.puts(("FAILURES: " + errCnt + "/" + keys.length + "\n").magenta);
    }    
  }

  /*
  * Callback passed to test case methods to denote
  * whether test has done its work
  */
  function done (e) {
    if (e) {
      errCnt ++;
      sys.error('✖'.red + " " + currentKey.red);
      if (e.message)
        sys.error(e.message.grey);
      if (e.stack && process.env.PRINT_STACK_TRACE)
        sys.error(e.stack.grey);
    } else {
      sys.puts('✔'.green + " " + currentKey.green);
    }
    currentKey = null;
    nextTest();
  }
  
  process.on('uncaughtException', done);
  sys.puts(("BEGIN: " + name).yellow);
  nextTest();
};
