module.exports = (function () {
  let arr = [];

  let fc = function (...arg) {
    let res = null;
    let isFunc = arg[0] instanceof Function;

    if (!isFunc) {
      arr = [...arr, ...arg];
      res = fc;
    }
    else {
      if (arr.length !== 0) {
        res = arr.reduce(arg[0]);
        arr = [];
      }
      else {
        res = 0;
      }
    }

    return res;
  }

  return fc;
})()
