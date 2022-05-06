const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((num) => parseInt(num));

let count = 0;

while (input.length > 0) {
  const A = parseInt(input.pop());
  count += parseInt(K / A);
  K = K % A;
}

console.log(count);