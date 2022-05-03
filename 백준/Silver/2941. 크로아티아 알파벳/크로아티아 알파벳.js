const input = require("fs").readFileSync("./dev/stdin").toString().trim();

const croa = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const solution = (input) => {
  let char = input;
  for (let i = 0; i < croa.length; i++) {
    if (char.includes(croa[i])) {
      char = char.split(croa[i]).join("C");
    }
  }
  return char.length;
};

console.log(solution(input));