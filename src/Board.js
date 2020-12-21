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
                if (newGrid[srcPos].type === "pi" && (Math.floor(destPos / 8) === 3 || Math.floor(destPos / 8) === 4)) {
                    newGrid[destPos] = JSON.parse(JSON.stringify({...newGrid[srcPos], type: "pe0"}));
                    if (newGrid[srcPos].player === "w") {

                        newGrid[srcPos-8] = {type: "ep", player: "w", wVal: 0, bVal: 0};
                    } else if (newGrid[srcPos].player === "b") {
                        console.log("HELLO" + srcPos+8)
                        newGrid[srcPos+8] = {type: "ep", player: "b", wVal: 0, bVal: 0};
                    }
                    newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                } else if (newGrid[srcPos].type === "pi" && !(Math.floor(destPos / 8) === 1 || Math.floor(destPos / 8) === 6)) {
                    newGrid[destPos] = JSON.parse(JSON.stringify({...newGrid[srcPos], type: "p"}));
                    newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                } else if ((Math.floor(destPos / 8) === 2 || Math.floor(destPos / 8) === 5) && newGrid[destPos].type === "e" && newGrid[destPos].player !== "") {
                    if (newGrid[destPos].player === "w") {
                        newGrid[destPos-8] = {type: "e", player: "", wVal: 0, bVal: 0};
                    } else if (newGrid[destPos].player === "b") {
                        newGrid[destPos+8] = {type: "e", player: "", wVal: 0, bVal: 0};
                    }
                    newGrid[destPos] = JSON.parse(JSON.stringify(newGrid[srcPos]));
                    newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                } else if (newGrid[srcPos].type === "ki") {
                    if (destPos === 2 && newGrid[0].type === "ri") {
                        newGrid[2] = {...newGrid[srcPos], type: "k"}
                        newGrid[3] = {...newGrid[0], type:"r"};
                        newGrid[0] = {type: "e", player: "", wVal: 0, bVal: 0};
                        newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                    } else if (destPos === 6 && newGrid[7].type === "ri") {
                        newGrid[6] = {...newGrid[srcPos], type: "k"}
                        newGrid[5] = {...newGrid[7], type:"r"};
                        newGrid[7] = {type: "e", player: "", wVal: 0, bVal: 0};
                        newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                    } else if (destPos === 62 && newGrid[63].type === "ri") {
                        newGrid[62] = {...newGrid[srcPos], type: "k"}
                        newGrid[61] = {...newGrid[63], type:"r"};
                        newGrid[63] = {type: "e", player: "", wVal: 0, bVal: 0};
                        newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                    } else if (destPos === 58 && newGrid[56].type === "ri") {
                        newGrid[58] = {...newGrid[srcPos], type: "k"}
                        newGrid[59] = {...newGrid[56], type:"r"};
                        newGrid[56] = {type: "e", player: "", wVal: 0, bVal: 0};
                        newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                    } else {
                        newGrid[destPos] = {...newGrid[srcPos], type: "k"};
                        newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                    }

                } else {
                    newGrid[destPos] = JSON.parse(JSON.stringify(newGrid[srcPos]));
                    newGrid[srcPos] = {type: "e", player: "", wVal: 0, bVal: 0};
                }


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
            vals = [
                [{x:-1, y:2, v:1*valMult}],
                [{x:1, y:2, v:1*valMult}],
                [{x:-1, y:-2, v:1*valMult}],
                [{x:1, y:-2, v:1*valMult}],
                [{x:-2, y:1, v:1*valMult}],
                [{x:2, y:1, v:1*valMult}],
                [{x:-2, y:-1, v:1*valMult}],
                [{x:2, y:-1, v:1*valMult}]
            ]
            moves = vals;
        } else if (piece.type === "ri" || piece.type === "r") {
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
        } else if (piece.type === "ki" || piece.type === "k") {
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
            if (piece.type === "ki") {
                moves = [
                    [{x:0, y:-1, v:1*valMult}],
                    [{x:1, y:-1, v:1*valMult}],
                    [{x:1, y:0, v:1*valMult}, {x:2, y:0, v:1*valMult}],
                    [{x:1, y:1, v:1*valMult}],
                    [{x:0, y:1, v:1*valMult}],
                    [{x:-1, y:1, v:1*valMult}],
                    [{x:-1, y:0, v:1*valMult}, {x:-2, y:0, v:1*valMult}],
                    [{x:-1, y:-1, v:1*valMult}],
                ]
            } else {
                moves = vals;
            }
        } else if (piece.type === "pi" || piece.type === "pe" || piece.type === "p") {
            const dir = valMult > 0 ? -1 : 1;
            vals = [
                [{x:-1, y:dir, v:1*valMult}],
                [{x:1, y:dir, v:1*valMult}],
            ]
            if (piece.type === "pi") {
                moves = [
                    [{x:0, y:dir, v:1*valMult}, {x:0, y:2*dir, v:1*valMult}],
                    [{x:-1, y:dir, v:1*valMult}],
                    [{x:1, y:dir, v:1*valMult}],
                ]
            } else if (piece.type === "pe" || piece.type === "p") {
                moves = [
                    [{x:0, y:dir, v:1*valMult}],
                    [{x:-1, y:dir, v:1*valMult}],
                    [{x:1, y:dir, v:1*valMult}],
                ]
            }
        }
        return attackPath ? vals : moves
    }

    getLegalMoves(path, pos, grid, forAttacks=true) {
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
            } else if (!forAttacks && (grid[pos].type === "pi" || grid[pos].type === "pe" || grid[pos].type === "p")) {
                if(withinBoard[i].x === 0 && grid[curPos].player !== grid[pos].player && grid[curPos].player !== "") {
                    legalMoves = withinBoard.slice(0, i);
                } else if (withinBoard[i].x !== 0 && grid[curPos].player === "") {
                    legalMoves = withinBoard.slice(0, i);
                } else if (withinBoard[i].x !== 0 && grid[curPos].player !== grid[pos].player && grid[curPos].player !== "") {
                    legalMoves = withinBoard.slice(0, i+1);
                }
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
        moves = moves.map(path => this.getLegalMoves(path, pos, grid, false)).flat();
        moves = moves.map(move => {
            return(pos + move.x + 8*move.y)
        })

        return moves
    }

    analyze(pos, piece, grid) {
        let vals = this.getPaths(piece, true)

        vals = vals.map(path => this.getLegalMoves(path, pos, grid)).flat();

        vals.forEach(v => {
            if(v.v > 0) {
                grid[pos + v.x + 8*v.y].wVal = grid[pos + v.x + 8*v.y].wVal + (v.v)
            } else {
                grid[pos + v.x + 8*v.y].bVal = grid[pos + v.x + 8*v.y].bVal - (v.v)
            }

        })

        return grid
    }

    refreshBoard() {
        this.setState(prevState => {
            let newGrid = JSON.parse(JSON.stringify(prevState.grid));
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid[i + 8*j].wVal = 0;
                    newGrid[i + 8*j].bVal = 0;
                }
            }
            for(let i = 0; i < 8; i++) {
                for(let j = 0; j < 8; j++) {
                    newGrid = this.analyze(8*i + j, newGrid[8*i + j], newGrid);

                    if (newGrid[8*i + j].type === "pe0") {
                        newGrid[8*i + j] = JSON.parse(JSON.stringify({...newGrid[8*i + j], type: "pe"}));
                    } else if (newGrid[8*i + j].type === "pe") {
                        newGrid[8*i + j] = JSON.parse(JSON.stringify({...newGrid[8*i + j], type: "p"}));
                    }

                    if (newGrid[8*i + j].type === "ep" && newGrid[8*i + j].player !== "") {
                        newGrid[8*i + j] = JSON.parse(JSON.stringify({...newGrid[8*i + j], type: "e"}));
                    } else if (newGrid[8*i + j].type === "e" && newGrid[8*i + j].player !== "") {
                        newGrid[8*i + j] = JSON.parse(JSON.stringify({...newGrid[8*i + j], player: ""}));
                    }
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
            </div>
        )
    }
}

export default Board
