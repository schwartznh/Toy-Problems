// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

var numTrees = function(n) {
  var treeCount = 0;

  var factorial = function(n) {
    if (!n) {
      return 1;
    }
    var x = 1;
    for (var i = 2; i <= n; i++) {
      x *= i;
    }
    return x;
  };

  var choose = function(setSize, subsetSize) {
    return (factorial(setSize) / (factorial(subsetSize) * factorial (setSize - subsetSize)));
  };

  var recurse = function(nodesOnLevel, nodesLeftToPlace, multiplier) {
    if (nodesLeftToPlace === 0) {
      treeCount += multiplier;
    } else if (nodesLeftToPlace < 0 || nodesOnLevel === 0) {
      return;
    } else {
      for (var nodesPlaced = 0; nodesPlaced <= 2 * nodesOnLevel; nodesPlaced++) {
        var combos = choose(2 * nodesOnLevel, nodesPlaced);
        recurse(nodesPlaced, nodesLeftToPlace - nodesPlaced, multiplier * combos);
      }
    }
  };

  recurse(1, n - 1, 1);
  return treeCount;
};