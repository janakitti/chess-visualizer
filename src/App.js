import React from "react"
import './App.css';

import Board from './Board';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="app-body">
        <h1>Visualizer</h1>
        <Board />
      </div>
    )
  }
}

export default App;
