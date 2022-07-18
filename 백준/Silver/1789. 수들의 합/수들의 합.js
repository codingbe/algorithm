const input = parseInt(require("fs").readFileSync("./dev/stdin"));
let cnt = Math.sqrt(input * 2);

if (Number.isInteger(cnt)) cnt--;
else cnt |= 0; // cnt = cnt | 0

while (cnt * (cnt + 1) > 2 * input) cnt--;

console.log(cnt);