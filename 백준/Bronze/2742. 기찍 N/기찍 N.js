const fs = require("fs");
const N = parseInt(fs.readFileSync("./dev/stdin").toString());

const answer = [];

for (let i = N; i >= 1; i--) {
   answer.push(i);
}

console.log(answer.join("\n"));