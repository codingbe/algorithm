const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

let result = 0;
let count = 1;

for (let i = 1; i <= parseInt(input[0]); i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      result += count;
      count++;
    } else {
      count = 1;
    }
  }
  console.log(result);
  result = 0;
  count = 1;
}