let [N, I] = require("fs").readFileSync("./dev/stdin").toString().split("\n");
I = I.split(" ").map((num) => parseInt(num));

console.log(I.reduce((prev, curr) => prev + curr, 0) - Math.max(...I));