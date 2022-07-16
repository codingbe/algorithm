console.log(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .split(" ")
    .sort((a, b) => a - b)[1]
);