const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const answer = [];

for (let i = 0; i < input.length; i++) {
   const [A, B] = input[i].split(" ").map((num) => parseInt(num));
   answer.push(A + B);
}

console.log(answer.join("\n"));