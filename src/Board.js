import React from "react"
import './Board.css';

import Square from "./Square"
import initBoard from "./initBoard"

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            grid: initBoard()
        }
        this.refreshBoard = this.refreshBoard.bind(this)
        this.movePieceHandler = this.movePieceHandler.bind(this)
    }

    componentDidMount() {
        this.refreshBoard()
    }

    movePieceHandler(srcPos, destPos) {
        if(this.getMoves(parseInt(srcPos)).includes(destPos)) {
            this.setState(prevState => {
                let newGrid = JSON.parse(JSON.stringify(prevState.grid));
                newGrid[destPos] = JSON.parse(JSON.stringify(newGrid[srcPos]));
                console.log(`D: ${destPos} becomes ${newGrid[srcPos].type}`)
                newGrid[srcPos] = {type: "e", player: "", val: 0};

                return {grid: newGrid};
            })
        }
        this.refreshBoard()
    }

    renderSquare(i) {
        return <Square key={i} index={i} piece={this.state.grid[i]} movePieceHandler={this.movePieceHandler} />
    }

    getPaths(piece, attackPath=true) {
        let vals = []
        let moves = []
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
            moves = vals;
        } else if (piece.type === "r") {
            let paths = [[],[],[],[]]
            for(let i=1; i<=7; i++) {
                paths[0].push({x:0, y:-i, v:1*valMult})
                paths[1].push({x:i, y:0, v:1*valMult})
                paths[2].push({x:0, y:i, v:1*valMult})
                paths[3].push({x:-i, y:0, v:1*valMult})
            }
            vals = paths;
            moves = vals;
        } else if (piece.type === "b") {
            let paths = [[],[],[],[]]
            for(let i=1; i<=7; i++) {
                paths[0].push({x:-i, y:-i, v:1*valMult})
                paths[1].push({x:i, y:-i, v:1*valMult})
                paths[2].push({x:i, y:i, v:1*valMult})
                paths[3].push({x:-i, y:i, v:1*valMult})
            }
            vals = paths;
            moves = vals;
        } else if (piece.type === "q") {
            let paths = [[],[],[],[],[],[],[],[]]
            for(let i=1; i<=7; i++) {
                paths[0].push({x:0, y:-i, v:1*valMult})
                paths[1].push({x:i, y:0, v:1*valMult})
                paths[2].push({x:0, y:i, v:1*valMult})
                paths[3].push({x:-i, y:0, v:1*valMult})
                paths[4].push({x:-i, y:-i, v:1*valMult})
                paths[5].push({x:i, y:-i, v:1*valMult})
                paths[6].push({x:i, y:i, v:1*valMult})
                paths[7].push({x:-i, y:i, v:1*valMult})
            }
            vals = paths;
            moves = vals;
        } else if (piece.type === "k") {
            vals = [
                [{x:0, y:-1, v:1*valMult}],
                [{x:1, y:-1, v:1*valMult}],
                [{x:1, y:0, v:1*valMult}],
                [{x:1, y:1, v:1*valMult}],
                [{x:0, y:1, v:1*valMult}],
                [{x:-1, y:1, v:1*valMult}],
                [{x:-1, y:0, v:1*valMult}],
                [{x:-1, y:-1, v:1*valMult}],
            ]
            moves = vals;
        } else if (piece.type === "p") {
            vals = [
                [{x:-1, y:-valMult, v:1*valMult}],
                [{x:1, y:-valMult, v:1*valMult}],
            ]
            moves = [
                [{x:0, y:-valMult, v:1*valMult}]
            ]
        }
        return attackPath ? vals : moves
    }

    getLegalMoves(path, pos, grid) {
        let withinBoard = path.filter(val =>
            ((pos % 8) + val.x >= 0 && (pos % 8) + val.x <= 7) &&
            (Math.floor(pos / 8) + val.y >= 0 && Math.floor(pos / 8) + val.y <= 7)
        )
        let legalMoves = withinBoard;
        for(let i = 0; i < withinBoard.length; i++) {
            const curPos = parseInt(pos) + parseInt(withinBoard[i].x) + 8*parseInt(withinBoard[i].y)
            if(grid[curPos].player === grid[pos].player) {
                legalMoves = withinBoard.slice(0, i);
                break;
            } else if (grid[curPos].player !== "" && grid[curPos].player !== grid[pos].player) {
                legalMoves = withinBoard.slice(0, i + 1);
                break;
            }
        }
        return legalMoves
    }

    getMoves(pos) {
        const grid = JSON.parse(JSON.stringify(this.state.grid));
        let moves = this.getPaths(grid[pos], false)
        moves = moves.map(path => this.getLegalMoves(path, pos, grid)).flat();
        moves = moves.map(move => {
            return(pos + move.x + 8*move.y)
        })

        return moves
    }

    analyze(pos, piece, grid) {
        let vals = this.getPaths(piece, true)

        vals = vals.map(path => this.getLegalMoves(path, pos, grid)).flat();

        vals.forEach(v => {
            grid[pos + v.x + 8*v.y].val = grid[pos + v.x + 8*v.y].val + (v.v)
        })

        return grid
    }

    refreshBoard() {
        this.setState(prevState => {
            let newGrid = JSON.parse(JSON.stringify(prevState.grid));
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid[i + 8*j].val = 0;
                }
            }
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid = this.analyze(8*i + j, newGrid[8*i + j], newGrid);
                }
            }
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
            <div className="board">
                {displayBoard}
                <button onClick={this.refreshBoard}>Refresh</button>
            </div>
        )
    }
}

export default Board
