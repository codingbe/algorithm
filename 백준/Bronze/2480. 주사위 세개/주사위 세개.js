const fs = require("fs");
const [A, B, C] = fs
   .readFileSync("./dev/stdin")
   .toString()
   .split(" ")
   .map((num) => parseInt(num));

if (A === B && A === C) console.log(10000 + A * 1000);
else if (A !== B && A === C) console.log(1000 + C * 100);
else if (A !== B && B === C) console.log(1000 + C * 100);
else if (B !== C && A === C) console.log(1000 + C * 100);
else if (A === B && A !== C) console.log(1000 + A * 100);
else if (A !== B && A !== C && B !== C) {
   const max = Math.max(A, B, C);
   console.log(max * 100);
}