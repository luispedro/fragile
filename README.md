Fragile
=======

A pure, minimal unit testing tool for nodejs.

It's a new born baby project. Currently it can run tests asynchronously.

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
	> fragile examples/

The result displayed as below.

![Screenshot](http://kadirpekel.com/fragile.png)


