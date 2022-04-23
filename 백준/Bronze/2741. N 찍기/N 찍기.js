const fs = require("fs");
const N = parseInt(fs.readFileSync("./dev/stdin").toString());

const answer = [];

for (let i = 1; i <= N; i++) {
   answer.push(i);
}

console.log(answer.join("\n"));