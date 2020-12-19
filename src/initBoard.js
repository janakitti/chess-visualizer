import Piece from "./Piece"

function initBoard() {
    let initGrid = Array(64).fill(new Piece("temp", ""));
    for(let i = 8; i < 16; i++){
        initGrid[i] = new Piece("p", "b");
        initGrid[i+40] = new Piece("p", "w");
    }
    for(let i = 16; i < 48; i++){
        initGrid[i] = new Piece("e", "");
    }
    initGrid[0] = new Piece("r", "b");
    initGrid[7] = new Piece("r1", "b");
    initGrid[56] = new Piece("r1", "w");
    initGrid[63] = new Piece("r1", "w");
  
    initGrid[1] = new Piece("n1", "b");
    initGrid[6] = new Piece("n1", "b");
    initGrid[57] = new Piece("n1", "w");
    initGrid[62] = new Piece("n1", "w");
  
    initGrid[2] = new Piece("b", "b");
    initGrid[5] = new Piece("b", "b");
    initGrid[58] = new Piece("b", "w");
    initGrid[61] = new Piece("b", "w");
  
    initGrid[3] = new Piece("q", "b");
    initGrid[4] = new Piece("k", "b");
  
    initGrid[59] = new Piece("q", "w");
    initGrid[60] = new Piece("k", "w");
    return initGrid
}

export default initBoard