const { expect } = require('chai');
const recursion = require('./../recursion');

describe('recursion test', function() {
  it('should work with RS example', function () {
    let tree = {'value':100,'left':{'value':90,'left':{'value':70},'right':{'value':99}},'right':{'value':120,'left':{'value':110},'right':{'value':130}}};
    expect(recursion(tree)).to.deep.equal([[100], [90, 120], [70,99,110,130]]);
  });
  it('should work with different params', function () {
    let tree1 = {'value':100};
    let tree2 = {'value':100,'left':{'value':90,'left':{'value':70},'right':{'value':99,'left':{'value':90,'left':{'value':70},'right':{'value':99}},'right':{'value':120,'left':{'value':110},'right':{'value':130}} }},'right':{'value':120,'left':{'value':110},'right':{'value':130}}};
    
    expect(recursion(tree1)).to.deep.equal([[100]]);
    expect(recursion(tree2)).to.deep.equal([[100], [90, 120], [70, 99, 110, 130], [90, 120], [70, 99, 110, 130]]);
  });
  it('should return empty array', function () {
    let tree = {};
    expect(recursion(tree)).to.deep.equal([]);
  })
});
