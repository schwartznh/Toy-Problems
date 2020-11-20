// Word Search

// Given an m x n board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 200
// 1 <= word.length <= 103
// board and word consists only of lowercase and uppercase English letters.

var exist = function(board, word) {
  var recurse = function(row, col, idx) {
    if (idx === word.length) {
      return true;
    }
    if (!board[row] || word[idx] !== board[row][col]) {
      return;
    }
    var char = board[row][col];
    board[row][col] = 0;

    for (var [newRow, newCol] of [[row, col + 1], [row + 1, col], [row, col - 1], [row - 1, col]]) {
      if (recurse(newRow, newCol, idx + 1)) {
        return true;
      }
    }

    board[row][col] = char;
  };

  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0]) {
        if (recurse(row, col, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};