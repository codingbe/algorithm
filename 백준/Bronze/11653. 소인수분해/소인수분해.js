const num = parseInt(require("fs").readFileSync("./dev/stdin").toString());

function factorization(num) {
  let temp = num;
  let cnt = 2;
  const answer = [];
  while (temp > 1) {
    if (temp % cnt === 0) {
      temp = temp / cnt;
      answer.push(cnt);
    } else cnt++;
  }
  return answer.join("\n");
}

console.log(factorization(num));