import React from "react";
import {equalOrGreaterThan} from "./customValidators";
import {checkIfSomeoneWon, createTwoDimensionalArray} from "./helpers";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: createTwoDimensionalArray(this.props.rows, this.props.columns),
      xIsNext: true
    };
    this.initNewGame = this.initNewGame.bind(this);
  }

  initNewGame() {
    this.setState({
      board: createTwoDimensionalArray(this.props.rows, this.props.columns),
      xIsNext: true
    })
  }

  handleCellClick(row, column) {
    const board = this.state.board.map(row => [...row]);
    if (board[row][column] || checkIfSomeoneWon(board)) {
      return;
    }
    board[row][column] = this.state.xIsNext? '✕' : '◯';
    this.setState(state => ({
      board,
      xIsNext: !state.xIsNext
    }));
  }

  render() {
    let gameStatus = `Hey ${this.state.xIsNext ? '✕' : '◯'}, make your move!`;
    const winner = checkIfSomeoneWon(this.state.board);
    if (winner) {
      gameStatus = `${winner} is a winner!`;
    }
    return (
      <div>
        <table className="game-board">
          <tbody>
            {this.state.board.map((row, rowIndex) =>
              <tr key={rowIndex}>
                {row.map((column, columnIndex) =>
                  <td key={columnIndex} onClick={() => this.handleCellClick(rowIndex, columnIndex)}>
                    {column}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        <div className="status">{gameStatus}</div>
        <button onClick={this.initNewGame}>New game</button>
      </div>
    );
  }
}

Board.propTypes = {
  rows: equalOrGreaterThan(5),
  columns: equalOrGreaterThan(5)
};

Board.defaultProps = {
  rows: 15,
  columns: 15
};

export default Board;
