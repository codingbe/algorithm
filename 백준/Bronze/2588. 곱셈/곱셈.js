const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const one = parseInt(input[0]);
const two = input[1].split("").map((num) => parseInt(num));

for (let i = two.length - 1; i >= 0; i--) {
   console.log(one * two[i]);
}

console.log(input[0] * input[1]);
