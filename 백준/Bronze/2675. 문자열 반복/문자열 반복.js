const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

for (let i = 1; i <= parseInt(input[0]); i++) {
  const [cnt, str] = input[i].split(" ");
  let answer = "";
  const arr = str.split("");
  while (arr.length > 0) {
    const nStr = arr.shift();
    for (let j = 0; j < cnt; j++) {
      answer += nStr;
    }
  }
  console.log(answer);
}