const input = parseInt(require("fs").readFileSync("./dev/stdin"));
let sum = 0;
let cnt = 1;

while (1) {
  if (sum + cnt <= input) {
    sum += cnt;
    cnt++;
  } else break;
}

console.log(cnt - 1);