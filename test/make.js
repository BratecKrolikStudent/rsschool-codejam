const expect = require('chai').expect;
const make = require('./../make');

describe("make test", function() {
  it('should work with RS example', function () {
    function sum(a, b) {
      return a + b;
    }
    expect(make(15)(34, 21, 666)(41)(sum)).to.equal(777);
  });
  it('should work with different params', function () {
    function sum(a, b) {
      return a + b;
    }

    function sub(a, b) {
      return a - b;
    }

    function mul(a, b) {
      return a * b;
    }
    expect(make(1, 1, 1)(1, 1)(1)(sum)).to.equal(6);
    expect(make(1)(2, 3)(4, 5)(sum)).to.equal(15);
    expect(make(100, 5)(14, 4)(2)(sub)).to.equal(75);
    expect(make(2, 2)(1)(3, 3, 3)(mul)).to.equal(108);
  });
  it('should work without parameters', function () {
    function sum(a, b) {
      return a + b;
    }
    expect(make()(sum)).to.equal(0);
    expect(make()()()()(sum)).to.equal(0);
  })
});
