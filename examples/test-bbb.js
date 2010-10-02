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

exports.testSync2 = function (done) {
  assert.equal('123', 123);
  done();
};

exports.testAsync2 = function (done) {
  fs.readFile('./absent', function (err, data) {
    if (err) assert.ifError(err);
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