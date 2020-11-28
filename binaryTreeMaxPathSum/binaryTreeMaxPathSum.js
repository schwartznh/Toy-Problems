// Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var maxPathSum = function(root) {
  var foundPos = false;
  var max = -Infinity;

  var recurse = function(root, mustIncludeSelf) {
      if (!root) {
          return 0;
      }
      if (!foundPos) {
          if (root.val > 0) {
              foundPos = true;
          } else {
              max = Math.max(max, root.val);
          }
      }

      var leftConnected = recurse(root.left, true);
      var rightConnected = recurse(root.right, true);
      if (mustIncludeSelf) {
          return Math.max(root.val, root.val + leftConnected, root.val + rightConnected);
      }
      var leftMax = recurse(root.left, false);
      var rightMax = recurse(root.right, false);
      return Math.max(root.val, root.val + leftConnected, root.val + rightConnected, root.val + leftConnected + rightConnected, leftMax, rightMax);
  };

  var sum = recurse(root);
  return foundPos ? sum : max;
};