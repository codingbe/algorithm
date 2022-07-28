const input = require("fs").readFileSync("./dev/stdin").toString().trim();

const target = input.split("").reverse().join("");

console.log(input === target ? 1 : 0);