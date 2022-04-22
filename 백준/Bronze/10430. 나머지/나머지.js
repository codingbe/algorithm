const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const [A, B, C] = input.map((num) => parseInt(num));

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);