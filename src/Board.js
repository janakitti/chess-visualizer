import React from "react"

import Square from "./Square"

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: Array(64).fill("h")
        }
    }

    renderSquare(i) {
        return <Square key={i} piece={this.state.grid[i]} />
    }

    render() {
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
            </div>
        )
    }
}

export default Board