require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((temp) => temp.split(" ").map((num) => parseInt(num)))
  .forEach((nums, idx, arr) => {
    const [A, B] = nums;
    if (arr.length - 1 === idx) return;
    console.log(A > B ? "Yes" : "No");
  });