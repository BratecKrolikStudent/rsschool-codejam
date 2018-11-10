const make = (function make() {
  let arr = [];

  const fc = function closureFunc(...arg) {
    let res = null;
    const isFunc = arg[0] instanceof Function;

    if (!isFunc) {
      arr = [...arr, ...arg];
      res = fc;
    } else if (arr.length !== 0) {
      res = arr.reduce(arg[0]);
      arr = [];
    } else {
      res = 0;
    }

    return res;
  };

  return fc;
}());

module.exports = make;
