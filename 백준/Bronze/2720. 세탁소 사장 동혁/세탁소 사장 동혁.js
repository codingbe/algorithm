const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const change = {
  Q: 25,
  D: 10,
  N: 5,
  P: 1,
};

for (let i = 1; i <= parseInt(input[0]); i++) {
  let sum = parseInt(input[i]);
  const count = {
    Q: 0,
    D: 0,
    N: 0,
    P: 0,
  };
  while (sum > 0) {
    if (sum - change.Q >= 0) {
      sum -= change.Q;
      count.Q++;
    } else if (sum - change.D >= 0) {
      sum -= change.D;
      count.D++;
    } else if (sum - change.N >= 0) {
      sum -= change.N;
      count.N++;
    } else {
      sum -= change.P;
      count.P++;
    }
  }
  console.log(Object.values(count).join(" "));
}