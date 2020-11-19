// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

var partition = function(head, x) {
  var lessList = { val: null, next: null };
  var greaterList = { val: null, next: null };
  var bothNode = head;
  var lessNode = lessList;
  var greaterNode = greaterList;
  while (bothNode) {
    if (bothNode.val >= x) {
      greaterNode.next = { val: bothNode.val, next: null};
      greaterNode = greaterNode.next;
    } else {
      lessNode.next = { val: bothNode.val, next: null };
      lessNode = lessNode.next;
    }
    bothNode = bothNode.next;
  }
  lessNode.next = greaterList.next;
  return lessList.next;
};