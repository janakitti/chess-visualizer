import React from "react";
import "./Board.css";

import Square from "./Square";
import initBoard from "./initBoard";
import { analyze } from "./util/Analyze";
import { getPaths } from "./util/GetPaths";
import { getLegalMoves } from "./util/GetLegalMoves";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: initBoard(),
    };
    this.refreshBoard = this.refreshBoard.bind(this);
    this.movePieceHandler = this.movePieceHandler.bind(this);
  }

  componentDidMount() {
    this.refreshBoard();
  }

  movePieceHandler(srcPos, destPos) {
    if (this.getMoves(parseInt(srcPos)).includes(destPos)) {
      this.setState((prevState) => {
        let newGrid = JSON.parse(JSON.stringify(prevState.grid));
        if (
          newGrid[srcPos].type === "pi" &&
          (Math.floor(destPos / 8) === 3 || Math.floor(destPos / 8) === 4)
        ) {
          newGrid[destPos] = JSON.parse(
            JSON.stringify({ ...newGrid[srcPos], type: "pe0" })
          );
          if (newGrid[srcPos].player === "w") {
            newGrid[srcPos - 8] = { type: "ep", player: "w", wVal: 0, bVal: 0 };
          } else if (newGrid[srcPos].player === "b") {
            newGrid[srcPos + 8] = { type: "ep", player: "b", wVal: 0, bVal: 0 };
          }
          newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
        } else if (
          newGrid[srcPos].type === "pi" &&
          !(Math.floor(destPos / 8) === 1 || Math.floor(destPos / 8) === 6)
        ) {
          newGrid[destPos] = JSON.parse(
            JSON.stringify({ ...newGrid[srcPos], type: "p" })
          );
          newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
        } else if (
          (Math.floor(destPos / 8) === 2 || Math.floor(destPos / 8) === 5) &&
          newGrid[destPos].type === "e" &&
          newGrid[destPos].player !== ""
        ) {
          if (newGrid[destPos].player === "w") {
            newGrid[destPos - 8] = { type: "e", player: "", wVal: 0, bVal: 0 };
          } else if (newGrid[destPos].player === "b") {
            newGrid[destPos + 8] = { type: "e", player: "", wVal: 0, bVal: 0 };
          }
          newGrid[destPos] = JSON.parse(JSON.stringify(newGrid[srcPos]));
          newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
        } else if (newGrid[srcPos].type === "ki") {
          if (destPos === 2 && newGrid[0].type === "ri") {
            newGrid[2] = { ...newGrid[srcPos], type: "k" };
            newGrid[3] = { ...newGrid[0], type: "r" };
            newGrid[0] = { type: "e", player: "", wVal: 0, bVal: 0 };
            newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
          } else if (destPos === 6 && newGrid[7].type === "ri") {
            newGrid[6] = { ...newGrid[srcPos], type: "k" };
            newGrid[5] = { ...newGrid[7], type: "r" };
            newGrid[7] = { type: "e", player: "", wVal: 0, bVal: 0 };
            newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
          } else if (destPos === 62 && newGrid[63].type === "ri") {
            newGrid[62] = { ...newGrid[srcPos], type: "k" };
            newGrid[61] = { ...newGrid[63], type: "r" };
            newGrid[63] = { type: "e", player: "", wVal: 0, bVal: 0 };
            newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
          } else if (destPos === 58 && newGrid[56].type === "ri") {
            newGrid[58] = { ...newGrid[srcPos], type: "k" };
            newGrid[59] = { ...newGrid[56], type: "r" };
            newGrid[56] = { type: "e", player: "", wVal: 0, bVal: 0 };
            newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
          } else {
            newGrid[destPos] = { ...newGrid[srcPos], type: "k" };
            newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
          }
        } else {
          newGrid[destPos] = JSON.parse(JSON.stringify(newGrid[srcPos]));
          newGrid[srcPos] = { type: "e", player: "", wVal: 0, bVal: 0 };
        }

        return { grid: newGrid };
      });
    }
    this.refreshBoard();
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        index={i}
        piece={this.state.grid[i]}
        movePieceHandler={this.movePieceHandler}
      />
    );
  }

  getMoves(pos) {
    const grid = JSON.parse(JSON.stringify(this.state.grid));
    let moves = getPaths(grid[pos], false);
    moves = moves.map((path) => getLegalMoves(path, pos, grid, false)).flat();
    moves = moves.map((move) => {
      return pos + move.x + 8 * move.y;
    });

    return moves;
  }

  refreshBoard() {
    this.setState((prevState) => {
      let newGrid = JSON.parse(JSON.stringify(prevState.grid));
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          newGrid[i + 8 * j].wVal = 0;
          newGrid[i + 8 * j].bVal = 0;
        }
      }
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (newGrid[8 * i + j].type === "pe0") {
            newGrid[8 * i + j] = JSON.parse(
              JSON.stringify({ ...newGrid[8 * i + j], type: "pe" })
            );
          } else if (newGrid[8 * i + j].type === "pe") {
            newGrid[8 * i + j] = JSON.parse(
              JSON.stringify({ ...newGrid[8 * i + j], type: "p" })
            );
          }

          if (
            newGrid[8 * i + j].type === "ep" &&
            newGrid[8 * i + j].player !== ""
          ) {
            newGrid[8 * i + j] = JSON.parse(
              JSON.stringify({ ...newGrid[8 * i + j], type: "e" })
            );
          } else if (
            newGrid[8 * i + j].type === "e" &&
            newGrid[8 * i + j].player !== ""
          ) {
            newGrid[8 * i + j] = JSON.parse(
              JSON.stringify({ ...newGrid[8 * i + j], player: "" })
            );
          }
          newGrid = analyze(8 * i + j, newGrid[8 * i + j], newGrid);
        }
      }
      return { grid: newGrid };
    });
  }

  render() {
    console.log("render");
    const displayBoard = [];
    for (let i = 0; i < 8; i++) {
      const displayRow = [];
      for (let j = 0; j < 8; j++) {
        displayRow.push(this.renderSquare(8 * i + j));
      }
      displayBoard.push(
        <div key={i} className="board-row">
          {displayRow}
        </div>
      );
    }
    return <div className="board">{displayBoard}</div>;
  }
}

export default Board;
