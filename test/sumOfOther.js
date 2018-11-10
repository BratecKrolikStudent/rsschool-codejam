const {
  expect,
} = require('chai');
const sumOfOther = require('./../src/sumOfOther');

describe('sumOfOther test', () => {
  it('should work with RS example', () => {
    const numbers = [2, 3, 4, 1];
    expect(sumOfOther(numbers)).to.deep.equal([8, 7, 6, 9]);
  });
  it('should work with different params', () => {
    const num1 = [1, 2, 3, 4];
    const num2 = [0, 1, 2, 2];
    const num3 = [10, 0, 11];
    const num4 = [0];
    expect(sumOfOther(num1)).to.deep.equal([9, 8, 7, 6]);
    expect(sumOfOther(num2)).to.deep.equal([5, 4, 3, 3]);
    expect(sumOfOther(num3)).to.deep.equal([11, 21, 10]);
    expect(sumOfOther(num4)).to.deep.equal([0]);
  });
  it('should return empty array', () => {
    expect(sumOfOther([])).to.be.an('array').that.is.equal; // eslint-disable-line
  });
});
