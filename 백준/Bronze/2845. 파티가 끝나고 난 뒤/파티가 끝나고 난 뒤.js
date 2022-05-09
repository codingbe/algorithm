let [L, P] = require("fs").readFileSync("./dev/stdin").toString().split("\n");

L = L.split(" ").map((num) => parseInt(num));
L = L[0] * L[1];
P = P.split(" ").map((num) => parseInt(num));

P.forEach((num) => {
  console.log(num - L);
});