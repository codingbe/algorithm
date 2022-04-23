const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const [A, B] = input[0].split(" ").map((num) => parseInt(num));
const C = parseInt(input[1]);

const sum = A * 60 + B + C;
const hour = parseInt(sum / 60);
const minutes = sum % 60;

console.log(`${hour >= 24 ? hour - 24 : hour} ${minutes}`);