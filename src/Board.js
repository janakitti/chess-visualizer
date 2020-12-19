import React from "react"

import Square from "./Square"
import Piece from "./Piece"
import initBoard from "./initBoard"

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: initBoard()
        }
        this.refreshBoard = this.refreshBoard.bind(this)
    }

    renderSquare(i) {
        return <Square key={i} piece={this.state.grid[i].val} />
    }

    analyze(pos, piece, grid) {
        if (piece.type === "n") {
            let vals = [
                [pos-17, 1],
                [pos-10, 1],
                [pos+6, 1],
                [pos+15, 1],
                [pos-15, 1],
                [pos-6, 1],
                [pos+10, 1],
                [pos+17, 1]
            ].filter(v => v[0] >= 0 && v[0] <= 63);
            vals.forEach(v => {
                grid[v[0]].val = grid[v[0]].val + v[1]
            })
            return grid
        } else {
            return grid
        }
    }

    refreshBoard() {
        this.setState(prevState => {
            let newGrid = prevState.grid;
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid = this.analyze(8*i + j, prevState.grid[8*i + j], newGrid);
                }
            }
            return {newGrid}
        })
        
    }

    render() {
        console.log("render");
        const displayBoard = [];
        for(let i = 0; i < 8; i++) {
            const displayRow = [];
            for(let j = 0; j < 8; j++) {
                displayRow.push(this.renderSquare(8*i + j))
            }
            displayBoard.push(<div key={i} className="board-row">{displayRow}</div>)
        }
        return (
            <div>
                {displayBoard}
                <button onClick={this.refreshBoard}>Refresh</button>
            </div>
        )
    }
}

export default Board