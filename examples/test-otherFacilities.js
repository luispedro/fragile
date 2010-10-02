var assert = require('assert'),
  fs = require('fs');

exports.setup = function (done) {
  this.foo = 'bar';
  done();
};

exports.testSync2 = function (done) {
  assert.equal('123', 123);
  done();
};

exports.testAsync2 = function (done) {
  var self = this;
  fs.readFile('./examples/absent', function (err, data) {
    if (err) assert.ifError(err);
    assert.ok(data);
    assert.equal(self.foo, data.toString());
    done();
  });
};

exports.teardown = function (done) {
  delete this.foo;
  done();
};