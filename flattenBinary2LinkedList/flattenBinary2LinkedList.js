// Flatten binary tree to a Linked List

// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

var flatten = function(root) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    return;
  }
  if (!root.left) {
    flatten(root.right);
    return;
  }
  if (!root.right) {
    flatten(root.left);
    root.right = root.left;
    root.left = null;
    return;
  }
  flatten(root.left);
  flatten(root.right);
  var righty = root.right;
  root.right = root.left;
  root.left = null;
  var node = root.right;
  while (node.right) {
    node = node.right;
  }
  node.right = righty;
};