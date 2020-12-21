

function initBoard() {

    let initGrid = Array(64).fill({type: "e", player: "", wVal: 0, bVal: 0, img:""});
    for(let i = 8; i < 16; i++){
        initGrid[i] = {type: "p", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"};
        initGrid[i+40] = {type: "p", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"};
    }
    for(let i = 16; i < 48; i++){
        initGrid[i] = {type: "e", player: "", wVal: 0, bVal: 0, img:""};
    }
    initGrid[0] = {type: "r", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"};
    initGrid[7] = {type: "r", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"};
    initGrid[56] = {type: "r", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"};
    initGrid[63] = {type: "r", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"};
  
    initGrid[1] = {type: "n", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"};
    initGrid[6] = {type: "n", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"};
    initGrid[57] = {type: "n", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"};
    initGrid[62] = {type: "n", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"};
  
    initGrid[2] = {type: "b", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"};
    initGrid[5] = {type: "b", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"};
    initGrid[58] = {type: "b", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"};
    initGrid[61] = {type: "b", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"};
  
    initGrid[3] = {type: "q", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"};
    initGrid[4] = {type: "k", player: "b", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"};
  
    initGrid[59] = {type: "q", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"};
    initGrid[60] = {type: "k", player: "w", wVal: 0, bVal: 0, img:"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"};

    // initGrid[19] = {type: "p", player: "b", val: 0};
    // initGrid[11] = {type: "e", player: "", val: 0};

    return initGrid
}

export default initBoard
