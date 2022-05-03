let [A, B] = require("fs").readFileSync("./dev/stdin").toString().split(" ");

A = parseInt(A.split("").reverse().join(""));
B = parseInt(B.split("").reverse().join(""));

console.log(Math.max(A, B));