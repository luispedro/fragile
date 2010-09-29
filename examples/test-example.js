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