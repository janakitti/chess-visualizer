import React from "react"

import Square from "./Square"
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
        const valMult = piece.player === "w" ? 1 : -1
        if (piece.type === "n") {
            vals = [[
                {x:-1, y:2, v:1*valMult},
                {x:1, y:2, v:1*valMult},
                {x:-1, y:-2, v:1*valMult},
                {x:1, y:-2, v:1*valMult},
                {x:-2, y:1, v:1*valMult},
                {x:2, y:1, v:1*valMult},
                {x:-2, y:-1, v:1*valMult},
                {x:2, y:-1, v:1*valMult}
            ]]
        } else if (piece.type === "r") {
            let path = []
            for(let i=-1; i>=-7; i--) {
                path.push({x:i, y:0, v:1*valMult})
            }
            vals.push(path);
            path = [];
            for(let i=1; i<=7; i++) {
                path.push({x:i, y:0, v:1*valMult})
            }
            vals.push(path);
            path = [];
            for(let i=-1; i>=-7; i--) {
                path.push({x:0, y:i, v:1*valMult})
            }
            vals.push(path);
            path = [];
            for(let i=1; i<=7; i++) {
                path.push({x:0, y:i, v:1*valMult})
            }
            vals.push(path);
        }

        console.log("VALS: ", vals);
        vals = vals.map(path => {
            let withinBoard = path.filter(val =>
                ((pos % 8) + val.x >= 0 && (pos % 8) + val.x <= 7) &&
                (Math.floor(pos / 8) + val.y >= 0 && Math.floor(pos / 8) + val.y <= 7)
            )
            console.log("WB: ", withinBoard);
            let legalMoves = withinBoard;
            for(let i = 0; i < withinBoard.length; i++) {
                const curPos = pos + withinBoard[i].x + 8*withinBoard[i].y
                if(grid[curPos].player === grid[pos].player) {
                    legalMoves = withinBoard.slice(0, i);
                    break;
                } else if (grid[curPos].player !== "" && grid[curPos].player !== grid[pos].player) {
                    legalMoves = withinBoard.slice(0, i + 1);
                    break;
                }
            }
            console.log("LM: ", legalMoves);
            return legalMoves
        })

        const flattenVals = vals.flat();
        console.log("FLATTEN: ", flattenVals);
        flattenVals.forEach(v => {
            grid[pos + v.x + 8*v.y].val = grid[pos + v.x + 8*v.y].val + (v.v)
        })

        return grid
    }

    refreshBoard() {
        this.setState(prevState => {
            let newGrid = JSON.parse(JSON.stringify(prevState.grid));
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid = this.analyze(8*i + j, newGrid[8*i + j], newGrid);
                }
            }
            console.log(newGrid)
            return {grid: newGrid}
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
