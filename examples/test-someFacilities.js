var assert = require('assert'),
  fs = require('fs');

exports.setup = function (done) {
  this.foo = 'bar';
  done();
};

exports.testSync1 = function (done) {
  assert.strictEqual('123', 123,
    "This must fail with this assertion message");
  done();
};

exports.testAsync1 = function (done) {
  var self = this;
  fs.readFile('./examples/foo', function (err, data) {
    if (err) assert.fail(err);
    assert.ok(data);
    assert.equal(self.foo, data.toString());
    done();
  });
};

exports.teardown = function (done) {
  delete this.foo;
  done();
};