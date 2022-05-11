let remain = 1000 - parseInt(require("fs").readFileSync("./dev/stdin").toString());

const coins = [500, 100, 50, 10, 5, 1];
let cnt = 0;

while (remain > 0) {
  const coin = coins.shift();
  cnt += parseInt(remain / coin);
  remain = remain % coin;
}

process.stdout.write(`${cnt}`);