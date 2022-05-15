const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

let chicken = parseInt(input[0]);
let [coke, beer] = input[1].split(" ").map((num) => parseInt(num));
let cnt = 0;

coke = parseInt(coke / 2);
chicken - coke >= 0 ? (cnt += coke) : (cnt += chicken);
chicken -= coke;

if (chicken > 0 && beer > 0) {
  chicken - beer >= 0 ? (cnt += beer) : (cnt += chicken);
}

console.log(cnt);