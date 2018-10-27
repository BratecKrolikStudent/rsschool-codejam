module.exports = function sumOfOther(arg) {
  return arg.map((value, index, arr) => arr.reduce((acc, val, idx) => {
    return (index === idx) ?
      acc :
      acc + val;
  }, 0));
}
