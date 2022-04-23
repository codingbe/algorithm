const fs = require("fs");
const N = parseInt(fs.readFileSync("./dev/stdin").toString());

const answer = [];

for (let i = 0; i < N; i++) {
   let result = "";
   for (let j = N - 1; j >= 0; j--) {
      if (j > i) {
         result += " ";
      } else result += "*";
   }
   answer.push(result);
}

console.log(answer.join("\n"));