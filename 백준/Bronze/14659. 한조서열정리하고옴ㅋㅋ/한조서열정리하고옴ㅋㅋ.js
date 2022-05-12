let [N, peaks] = require("fs").readFileSync("./dev/stdin").toString().split("\n");

peaks = peaks.split(" ").map((num) => parseInt(num));
const result = {};

while (peaks.length > 0) {
  const target = peaks.shift();
  for (let i = 0; i < peaks.length; i++) {
    if (peaks[i] < target) {
      result[target] ? result[target]++ : (result[target] = 1);
      peaks.splice(i, 1);
      i--;
    } else break;
  }
}

process.stdout.write(`${Math.max(...Object.values(result))}`);