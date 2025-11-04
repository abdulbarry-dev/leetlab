/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  // constraintes
  if (m > 1e6 || n > 1e6 || m < 1 || n < 1) return 0;

  if (2 >= m * n >= 1e6) return 0;

  if (1 >= guards.length >= 5 * 104 || 1 >= walls.length >= 5 * 104) return 0;

  let mat = [m, n];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((guards[i].length == walls[j].length) == 2) {
        if (guards[i] == [i, j]) {
          mat[i][j] = guards[i];
        } else if (walls[i] == [i, j]) {
          mat[i][j] = walls[i];
        } else {
          mat[i][j] = [i, j];
        }
      }
    }
  }

  console.log(mat);
};

// Test Case 1: Small grid with no guards or walls
const m1 = 3,
  n1 = 3;
const guards1 = [];
const walls1 = [];
console.log(countUnguarded(m1, n1, guards1, walls1));
// Expected Output: 9 (All cells are unguarded)

// Test Case 2: Grid with guards and walls
const m2 = 4,
  n2 = 4;
const guards2 = [
  [1, 1],
  [2, 2],
];
const walls2 = [
  [1, 2],
  [2, 1],
];
console.log(countUnguarded(m2, n2, guards2, walls2));
// Expected Output: Depends on the implementation logic for guards and walls

// Test Case 3: Large grid with guards and walls
const m3 = 5,
  n3 = 5;
const guards3 = [
  [0, 0],
  [4, 4],
];
const walls3 = [
  [2, 2],
  [3, 3],
];
console.log(countUnguarded(m3, n3, guards3, walls3));
// Expected Output: Depends on the implementation logic for guards and walls
