// Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var canJump = function(nums) {
  if (nums.length === 1) {
    return true;
  }

  var inaccessible = true;
  for (var i = 0; i < nums.length - 1; i++) {
    if ((nums.length - 1) - i <= nums[i]) {
      inaccessible = false;
      break;
    }
  }
  if (inaccessible) {
    return false;
  }

  var loserIdxCache = {};
  var inProgress = {};

  var recurse = function(idx) {
    if (!nums[idx] || loserIdxCache[idx]) {
      return false;
    }
    if ((nums.length - 1) - idx <= nums[idx]) {
      return true;
    }
    inProgress[idx] = true;
    for (var i = 1; i <= nums[idx]; i++) {
      for (var stop of [idx - i, idx + i]) {
        if (!inProgress[stop]) {
          if (recurse(stop)) {
            return true;
          }
        }
        loserIdxCache[stop] = true;
      }
    }
    return false;
  };

  return recurse(0);
};