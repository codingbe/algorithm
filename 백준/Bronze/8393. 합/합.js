const fs = require("fs");
const n = parseInt(fs.readFileSync("./dev/stdin").toString());

let result = 0;

for (let i = 1; i <= n; i++) {
   result += i;
}

console.log(result);