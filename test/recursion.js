const {
  expect,
} = require('chai');
const recursion = require('./../src/recursion');

describe('recursion test', () => {
  it('should work with RS example', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    expect(recursion(tree)).to.deep.equal([
      [100],
      [90, 120],
      [70, 99, 110, 130],
    ]);
  });
  it('should work with different params', () => {
    const tree1 = {
      value: 100,
    };
    const tree2 = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
          left: {
            value: 90,
            left: {
              value: 70,
            },
            right: {
              value: 99,
            },
          },
          right: {
            value: 120,
            left: {
              value: 110,
            },
            right: {
              value: 130,
            },
          },
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };

    expect(recursion(tree1)).to.deep.equal([
      [100],
    ]);
    expect(recursion(tree2)).to.deep.equal([
      [100],
      [90, 120],
      [70, 99, 110, 130],
      [90, 120],
      [70, 99, 110, 130],
    ]);
  });
  it('should return empty array', () => {
    const tree = {};
    expect(recursion(tree)).to.deep.equal([]);
  });
});
