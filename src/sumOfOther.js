module.exports = function sumOfOther(arg) {
  const sumOfArrayElements = arg.reduce((acc, val) => acc + val, 0);
  return arg.map(value => sumOfArrayElements - value);
};
