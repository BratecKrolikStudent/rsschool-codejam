module.exports = (function recursion() {
  let arr = [];

  const fc = function fc(tree, node = 0) {
    let res = null;

    if (node === 0) arr = [];
    if (!tree || !tree.value) {
      res = arr;
    } else {
      if (!arr[node]) {
        arr[node] = [];
      }
      arr[node] = [...arr[node], tree.value].sort((a, b) => a - b);
    }

    return !res ? (fc(tree.right, node + 1), fc(tree.left, node + 1)) : res;
  };

  return fc;
}());
