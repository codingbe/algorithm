console.log(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((num) => parseInt(num))
    .reduce((prev, cur, idx, arr) => {
      let sum = prev;

      if (cur <= 40) sum += 40;
      else sum += cur;

      if (idx === arr.length - 1) return sum / arr.length;
      else return sum;
    }, 0)
);