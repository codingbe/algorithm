const fs = require("fs");
const N = parseInt(fs.readFileSync("./dev/stdin").toString());

const answer = [];

for (let i = 0; i < N; i++) {
   let result = "";
   for (let j = 0; j <= i; j++) {
      result += "*";
   }
   answer.push(result);
}

console.log(answer.join("\n"));