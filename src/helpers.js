export function checkIfSomeoneWon(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      // checking vertical lines:
      if (row < (board.length - 4) &&
        board[row][column] &&
        board[row][column] === board[row + 1][column] &&
        board[row][column] === board[row + 2][column] &&
        board[row][column] === board[row + 3][column] &&
        board[row][column] === board[row + 4][column]
      ) {
        return board[row][column];
      }
      // checking horizontal lines:
      if (column < (board[row].length - 4) &&
        board[row][column] &&
        board[row][column] === board[row][column + 1] &&
        board[row][column] === board[row][column + 2] &&
        board[row][column] === board[row][column + 3] &&
        board[row][column] === board[row][column + 4]
      ) {
        return board[row][column];
      }
      // checking diagonals:
      if (row < (board.length - 4) && column < (board[row].length - 4)) {
        if (board[row][column] &&
          board[row][column] === board[row + 1][column + 1] &&
          board[row][column] === board[row + 2][column + 2] &&
          board[row][column] === board[row + 3][column + 3] &&
          board[row][column] === board[row + 4][column + 4]
        ) {
          return board[row][column];
        }
        if (board[row + 4][column] &&
          board[row + 4][column] === board[row + 3][column + 1] &&
          board[row + 4][column] === board[row + 2][column + 2] &&
          board[row + 4][column] === board[row + 1][column + 3] &&
          board[row + 4][column] === board[row][column + 4]
        ) {
          return board[row + 4][column];
        }
      }
    }
  }
  return null;
}

export function createTwoDimensionalArray(rows, columns) {
  return Array(rows).fill(null).map(() =>
    Array(columns).fill(null)
  );
}
