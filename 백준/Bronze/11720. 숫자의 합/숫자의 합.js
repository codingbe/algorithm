const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const nums = input[1].split("").map(num => parseInt(num));

let sum = 0;

for(let i=0; i<input[0]; i++){
    sum += nums[i]
}

console.log(sum);