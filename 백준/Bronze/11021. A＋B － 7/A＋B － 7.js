const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const T = parseInt(input[0]);

const answer = [];

for (let i = 1; i <= T; i++) {
   const [A, B] = input[i].split(" ").map((num) => parseInt(num));
   answer.push(`Case #${i}: ${A + B}`);
}

console.log(answer.join("\n"));