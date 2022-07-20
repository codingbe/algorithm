function commonMultiple(a, b) {
  let sum = 1;
  let A = a;
  let B = b;
  const cnt = Math.sqrt(A * B);

  for (let i = 2; i <= cnt; i++) {
    if (A % i === 0 && B % i == 0) {
      A = A / i;
      B = B / i;
      sum *= i;
      i--;
    }
  }

  return sum * A * B;
}

require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((temp) => temp.split(" "))
  .forEach((arr) => {
    let [A, B] = arr.map((num) => parseInt(num));

    console.log(commonMultiple(A, B));
  });