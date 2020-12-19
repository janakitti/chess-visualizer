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
        let vals = []
        if (piece.type === "n") {
            vals = [
                {x:-1, y:2, v:1},
                {x:1, y:2, v:1},
                {x:-1, y:-2, v:1},
                {x:1, y:-2, v:1},
                {x:-2, y:1, v:1},
                {x:2, y:1, v:1},
                {x:-2, y:-1, v:1},
                {x:2, y:-1, v:1}
            ]
        } else if (piece.type == "r") {
            // for(let i=-7; i<0; i++) {
            //     vals.push({x:i, y:0, v:1})
            // }
            // for(let i=1; i<=7; i++) {
            //     vals.push({x:i, y:0, v:1})
            // }
            // for(let i=-7; i<0; i++) {
            //     vals.push({x:0, y:i, v:1})
            // }
            for(let i=1; i<=7; i++) {
                vals.push({x:0, y:i, v:"a"})
            }
            grid[8].setVal(1)
        }
        
        vals = vals.filter(val => 
            ((pos % 8) + val.x >= 0 && (pos % 8) + val.x <= 7) &&
            (Math.floor(pos / 8) + val.y >= 0 && Math.floor(pos / 8) + val.y <= 7)
        )
        // vals.forEach(v => {
        //     grid[pos + v.x + 8*v.y].setVal(v.v)
        //     console.log("board: ", grid[pos + v.x + 8*v.y].val)
        //     console.log(grid[pos + v.x + 8*v.y])
        // })

        
        return grid
    }

    refreshBoard() {
        this.setState(prevState => {
            let newGrid = prevState.grid.map(a => Object.assign({}, a));
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