module.exports = (function () {
  let arr = [];

  let fc = function (tree, node = 0) {
    if (node === 0) arr = [];
    if (!tree || !tree.value) {
      return arr;
    }
    else {
      if (!arr[node]) arr[node] = [];
      arr[node] = [...arr[node], tree.value].sort((a, b) => a - b);
    }

    return fc(tree.right, node + 1), fc(tree.left, node + 1);
  }

  return fc;
})();
