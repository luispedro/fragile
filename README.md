Fragile
=======

A pure, minimal unit testing tool for nodejs.

It's a new born baby project, currenty it tests such module given below.
Also currently it run tests synchronously.

	// test-example.js
	
	module.exports = {
	  setup: function () {
	    this.foo = 'bar';
	  },
	  testA: function (assert) {
	    assert.equal(this.foo, 'bar', 'This must pass');    
	  },
	  testB: function (assert) {
	    assert.equal(this.foo, 'baz', 'This must fail');
	  },
	  teardown: function () {
	    delete this.foo;
	  }
	}


Test the file simply typing commands below.

	> npm install color	
	> git clone http://github.com/coffeemate/fragile.git
	> cd fragile
	> npm install
	> cd examples
	> fragile test-example.js

The result displayed as below.

![Screenshot](http://web15.twitpic.com/img/169910413-2d6b7295bf1415cf46678b57fcabae72.4ca3a8d0-full.png)


