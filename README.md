Fragile
=======

Fragile is a very lightweight command line unit testing tool for nodejs.
Please note that fragile is not a unit testing framework, it only reports
your tests to console. If you need rather advanced unit testing framework
go for [nodeunit](http://github.com/caolan/nodeunit)

Sample test case:

	// test-example.js
	
	var assert = require('assert'),
	  fs = require('fs');
	
	exports.setup = function (done) {
	  this.foo = 'bar';
	  done();
	};
	
	exports.testSync1 = function (done) {
	  assert.strictEqual('123', 123, "This must fail with this assertion message");
	  done();
	};
	
	exports.testAsync1 = function (done) {
	  var self = this;
	  fs.readFile('./foo', function (err, data) {
	    if (err) assert.fail(err);
	    assert.ok(data);
	    assert.equal(self.foo, data.toString());
	    done();
	  });
	};
	
	exports.teardown = function (done) {
	  // throw new Error('Something went wrong');
	  delete this.foo;
	  done();
	};
	

Test the file simply typing commands below.

	> npm install fragile
	> fragile test-example.js


A sample multi-test case report displayed below

![Screenshot](http://kadirpekel.com/fragile.png)


TODO
----

 * Write errors to stderr.
