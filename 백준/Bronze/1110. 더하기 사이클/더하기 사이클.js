const fs = require("fs");
const input = parseInt(fs.readFileSync("./dev/stdin").toString());

// 1의 자리에 있는 수 구하기: num % 10
// 10의 자리에 있는 수 구하기: Math.floor(num / 10)
// 1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10

let N = input;
let cycle = 0;
let sum = 0;

while (true) {
   sum = Math.floor(N / 10) + (N % 10);
   N = (N % 10) * 10 + (sum % 10);
   cycle++;
   if (input === N) {
      break;
   }
}

console.log(cycle);