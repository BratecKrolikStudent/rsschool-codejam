const expect = require('chai').expect;
const sumOfOther = require('./../sumOfOther');

describe("sumOfOther test", function() {
  it('should work with RS example', function () {
    let numbers = [2, 3, 4, 1];
    expect(sumOfOther(numbers)).to.deep.equal([8, 7, 6, 9]);
  });
  it('should work with different params', function () {
    let num1 = [1, 2, 3, 4];
    let num2 = [0, 1, 2, 2];
    let num3 = [10, 0, 11];
    let num4 = [0];
    expect(sumOfOther(num1)).to.deep.equal([9, 8, 7, 6]);
    expect(sumOfOther(num2)).to.deep.equal([5, 4, 3, 3]);
    expect(sumOfOther(num3)).to.deep.equal([11, 21, 10]);
    expect(sumOfOther(num4)).to.deep.equal([0]);
  });
  it('should return empty array', function () {
    expect(sumOfOther([])).to.be.an('array').that.is.empty;
  })
});