export const getPaths = (piece, attackPath = true) => {
  let vals = [];
  let moves = [];
  const valMult = piece.player === "w" ? 1 : -1;

  const pawnVal = 1;
  const knightVal = 3;
  const bishopVal = 3;
  const rookVal = 5;
  const queenVal = 9;
  const kingVal = 1;

  if (piece.type === "n") {
    vals = [
      [{ x: -1, y: 2, v: knightVal * valMult }],
      [{ x: 1, y: 2, v: knightVal * valMult }],
      [{ x: -1, y: -2, v: knightVal * valMult }],
      [{ x: 1, y: -2, v: knightVal * valMult }],
      [{ x: -2, y: 1, v: knightVal * valMult }],
      [{ x: 2, y: 1, v: knightVal * valMult }],
      [{ x: -2, y: -1, v: knightVal * valMult }],
      [{ x: 2, y: -1, v: knightVal * valMult }],
    ];
    moves = vals;
  } else if (piece.type === "ri" || piece.type === "r") {
    let paths = [[], [], [], []];
    for (let i = 1; i <= 7; i++) {
      paths[0].push({ x: 0, y: -i, v: rookVal * valMult });
      paths[1].push({ x: i, y: 0, v: rookVal * valMult });
      paths[2].push({ x: 0, y: i, v: rookVal * valMult });
      paths[3].push({ x: -i, y: 0, v: rookVal * valMult });
    }
    vals = paths;
    moves = vals;
  } else if (piece.type === "b") {
    let paths = [[], [], [], []];
    for (let i = 1; i <= 7; i++) {
      paths[0].push({ x: -i, y: -i, v: bishopVal * valMult });
      paths[1].push({ x: i, y: -i, v: bishopVal * valMult });
      paths[2].push({ x: i, y: i, v: bishopVal * valMult });
      paths[3].push({ x: -i, y: i, v: bishopVal * valMult });
    }
    vals = paths;
    moves = vals;
  } else if (piece.type === "q") {
    let paths = [[], [], [], [], [], [], [], []];
    for (let i = 1; i <= 7; i++) {
      paths[0].push({ x: 0, y: -i, v: queenVal * valMult });
      paths[1].push({ x: i, y: 0, v: queenVal * valMult });
      paths[2].push({ x: 0, y: i, v: queenVal * valMult });
      paths[3].push({ x: -i, y: 0, v: queenVal * valMult });
      paths[4].push({ x: -i, y: -i, v: queenVal * valMult });
      paths[5].push({ x: i, y: -i, v: queenVal * valMult });
      paths[6].push({ x: i, y: i, v: queenVal * valMult });
      paths[7].push({ x: -i, y: i, v: queenVal * valMult });
    }
    vals = paths;
    moves = vals;
  } else if (piece.type === "ki" || piece.type === "k") {
    vals = [
      [{ x: 0, y: -1, v: kingVal * valMult }],
      [{ x: 1, y: -1, v: kingVal * valMult }],
      [{ x: 1, y: 0, v: kingVal * valMult }],
      [{ x: 1, y: 1, v: kingVal * valMult }],
      [{ x: 0, y: 1, v: kingVal * valMult }],
      [{ x: -1, y: 1, v: kingVal * valMult }],
      [{ x: -1, y: 0, v: kingVal * valMult }],
      [{ x: -1, y: -1, v: kingVal * valMult }],
    ];
    if (piece.type === "ki") {
      moves = [
        [{ x: 0, y: -1, v: kingVal * valMult }],
        [{ x: 1, y: -1, v: kingVal * valMult }],
        [
          { x: 1, y: 0, v: kingVal * valMult },
          { x: 2, y: 0, v: kingVal * valMult },
        ],
        [{ x: 1, y: 1, v: kingVal * valMult }],
        [{ x: 0, y: 1, v: kingVal * valMult }],
        [{ x: -1, y: 1, v: kingVal * valMult }],
        [
          { x: -1, y: 0, v: kingVal * valMult },
          { x: -2, y: 0, v: kingVal * valMult },
        ],
        [{ x: -1, y: -1, v: kingVal * valMult }],
      ];
    } else {
      moves = vals;
    }
  } else if (
    piece.type === "pi" ||
    piece.type === "pe" ||
    piece.type === "pe0" ||
    piece.type === "p"
  ) {
    const dir = valMult > 0 ? -1 : 1;
    vals = [
      [{ x: -1, y: dir, v: pawnVal * valMult }],
      [{ x: 1, y: dir, v: pawnVal * valMult }],
    ];
    if (piece.type === "pi") {
      moves = [
        [
          { x: 0, y: dir, v: pawnVal * valMult },
          { x: 0, y: 2 * dir, v: pawnVal * valMult },
        ],
        [{ x: -1, y: dir, v: pawnVal * valMult }],
        [{ x: 1, y: dir, v: pawnVal * valMult }],
      ];
    } else if (piece.type === "pe" || piece.type === "p") {
      moves = [
        [{ x: 0, y: dir, v: pawnVal * valMult }],
        [{ x: -1, y: dir, v: pawnVal * valMult }],
        [{ x: 1, y: dir, v: pawnVal * valMult }],
      ];
    }
  }
  return attackPath ? vals : moves;
};
