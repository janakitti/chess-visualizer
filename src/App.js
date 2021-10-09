import React from "react";
import "./App.css";

import Board from "./Board";

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <div className="header">
          <div>
            <h1 className="title">Chess Visualizer</h1>
            <h3 className="subtitle">Piece Path Visualizer</h3>
          </div>
        </div>
        <div className="board-container">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
