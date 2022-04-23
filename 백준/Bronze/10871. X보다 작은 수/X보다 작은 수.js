const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const [N, X] = input[0].split(" ").map((num) => parseInt(num));
const nums = input[1].split(" ");

const answer = [];

for (let i = 0; i < N; i++) {
   if (nums[i] < X) answer.push(nums[i]);
}

console.log(answer.join(" "));