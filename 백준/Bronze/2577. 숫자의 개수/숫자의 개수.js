const [A, B, C] = require("fs")
   .readFileSync("./dev/stdin")
   .toString()
   .trim()
   .split("\n")
   .map((num) => parseInt(num));

const sum = String(A * B * C);
const result = {
   0: 0,
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0,
   7: 0,
   8: 0,
   9: 0,
};

for (let i = 0; i < sum.length; i++) {
   result[sum[i]] += 1;
}

console.log(Object.values(result).join("\n"));