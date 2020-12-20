

function initBoard() {
    let initGrid = Array(64).fill({t: "e", player: "", val: 0});
    for(let i = 8; i < 16; i++){
        initGrid[i] = {type: "p", player: "", val: 0};
        initGrid[i+40] = {type: "p", player: "", val: 0};
    }
    for(let i = 16; i < 48; i++){
        initGrid[i] = {type: "e", player: "", val: 0};
    }
    initGrid[0] = {type: "r", player: "b", val: 0};
    initGrid[7] = {type: "r", player: "b", val: 0};
    initGrid[56] = {type: "r", player: "w", val: 0};
    initGrid[63] = {type: "r", player: "w", val: 0};
  
    initGrid[1] = {type: "n", player: "b", val: 0};
    initGrid[6] = {type: "n", player: "b", val: 0};
    initGrid[57] = {type: "n", player: "w", val: 0};
    initGrid[62] = {type: "n", player: "w", val: 0};
  
    initGrid[2] = {type: "b", player: "b", val: 0};
    initGrid[5] = {type: "b", player: "b", val: 0};
    initGrid[58] = {type: "b", player: "w", val: 0};
    initGrid[61] = {type: "b", player: "w", val: 0};
  
    initGrid[3] = {type: "q", player: "b", val: 0};
    initGrid[4] = {type: "k", player: "b", val: 0};
  
    initGrid[59] = {type: "q", player: "w", val: 0};
    initGrid[60] = {type: "k", player: "w", val: 0};
    return initGrid
}

export default initBoard
