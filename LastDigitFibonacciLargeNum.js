var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var n = parseInt(line, 10);
    console.log(lastFibonacciDig(n));
    process.exit();
  }
}

function lastFibonacciDig(n) {
    var fibArr = [0,1,1]
    for (var i = 2; i < n; i++) {
        fibArr.push((fibArr[i] + fibArr[i - 1]) % 10);
    }
    return fibArr[n];
}