import { getLegalMoves } from "./GetLegalMoves";
import { getPaths } from "./GetPaths";

export const analyze = (pos, piece, grid) => {
  let vals = getPaths(piece, true);

  vals = vals.map((path) => getLegalMoves(path, pos, grid)).flat();

  vals.forEach((v) => {
    if (v.v > 0) {
      grid[pos + v.x + 8 * v.y].wVal = grid[pos + v.x + 8 * v.y].wVal + v.v;
    } else {
      grid[pos + v.x + 8 * v.y].bVal = grid[pos + v.x + 8 * v.y].bVal - v.v;
    }
  });

  return grid;
};
