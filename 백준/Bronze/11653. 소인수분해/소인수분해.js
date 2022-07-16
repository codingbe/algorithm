const num = parseInt(require("fs").readFileSync("./dev/stdin"));

function factorization(num) {
  const answer = [];
  const sqrt = Math.sqrt(num);
  let temp = num;
  for (let i = 2; i <= sqrt; i++) {
    while (temp % i === 0) {
      answer.push(i);
      temp /= i;
    }
  }
  if (temp !== 1) answer.push(temp);
  return answer.join("\n");
}

console.log(factorization(num));