const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
   const [A, B] = input[i].split(" ").map((num) => parseInt(num));
   console.log(A + B);
}