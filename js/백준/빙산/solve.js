const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map((x) => +x);

let map = Array.from(Array(n), () => new Array());
for (let i = 1; i <= n; i++) {
  map[i - 1] = input[i].split(" ").map((x) => +x);
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let visited = Array.from(Array(n), () => new Array(m).fill(false));

const dfs = (start) => {
  let stack = [start];
  while (stack.length) {
    let [row, col] = stack.pop();
    visited[row][col] = true;
    let zero = 0;
    for (let i = 0; i < dx.length; i++) {
      if (
        row + dx[i] < 0 ||
        row + dx[i] >= n ||
        col + dy[i] < 0 ||
        col + dy[i] >= m
      )
        continue;

      if (map[row + dx[i]][col + dy[i]] === 0) {
        zero++;
        continue;
      }
      if (visited[row + dx[i]][col + dy[i]]) continue;
      stack.push([row + dx[i], col + dy[i]]);
    }
    map[row][col] = map[row][col] - zero === 0 ? -1 : map[row][col] - zero;
  }
};

let year = 0;
while (1) {
  let component = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && map[i][j] !== 0) {
        dfs([i, j]);
        component++;
      }
    }
  }

  if (component === 0) {
    console.log(0);
    break;
  } else if (component >= 2) {
    console.log(year);
    break;
  } else {
    year++;
    visited = Array.from(Array(n), () => new Array(m).fill(false));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] < 0) map[i][j] = 0;
      }
    }
  }
}
