export const getLegalMoves = (path, pos, grid, forAttacks = true) => {
  let withinBoard = path.filter(
    (val) =>
      (pos % 8) + val.x >= 0 &&
      (pos % 8) + val.x <= 7 &&
      Math.floor(pos / 8) + val.y >= 0 &&
      Math.floor(pos / 8) + val.y <= 7
  );
  let legalMoves = withinBoard;
  for (let i = 0; i < withinBoard.length; i++) {
    const curPos =
      parseInt(pos) +
      parseInt(withinBoard[i].x) +
      8 * parseInt(withinBoard[i].y);
    if (grid[curPos].player === grid[pos].player) {
      legalMoves = withinBoard.slice(0, i);
      break;
    } else if (
      !forAttacks &&
      (grid[pos].type === "pi" ||
        grid[pos].type === "pe" ||
        grid[pos].type === "p")
    ) {
      if (
        withinBoard[i].x === 0 &&
        grid[curPos].player !== grid[pos].player &&
        grid[curPos].player !== ""
      ) {
        legalMoves = withinBoard.slice(0, i);
      } else if (withinBoard[i].x !== 0 && grid[curPos].player === "") {
        legalMoves = withinBoard.slice(0, i);
      } else if (
        withinBoard[i].x !== 0 &&
        grid[curPos].player !== grid[pos].player &&
        grid[curPos].player !== ""
      ) {
        legalMoves = withinBoard.slice(0, i + 1);
      }
      break;
    } else if (
      grid[curPos].player !== "" &&
      grid[curPos].player !== grid[pos].player
    ) {
      legalMoves = withinBoard.slice(0, i + 1);
      break;
    }
  }
  return legalMoves;
};
