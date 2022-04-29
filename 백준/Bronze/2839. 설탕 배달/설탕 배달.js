let input = parseInt(require("fs").readFileSync("./dev/stdin").toString());
let count = 0;

while (input > 0) {
  if (input % 5 !== 0) {
    input -= 3;
    count++;
  } else if (input % 5 === 0) {
    count += input / 5;
    input = 0;
  } else if (input < 0) {
    count = -1;
    break;
  }
}

if (input < 0) console.log(-1);
else console.log(count);