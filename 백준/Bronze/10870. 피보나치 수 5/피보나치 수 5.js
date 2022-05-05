const input = parseInt(require("fs").readFileSync("./dev/stdin").toString());

const solution = (num) => {
  const memo = {};
  const fibonacci = (num) => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (memo[num]) return memo[num];
    return (memo[num] = fibonacci(num - 1) + fibonacci(num - 2));
  };
  return fibonacci(num);
};

console.log(solution(input));