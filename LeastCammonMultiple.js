

var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        var n = parseInt(line.split(" ")[0], 10);
        var m = parseInt(line.split(" ")[1], 10);
        console.log(LCMNaive(n, m));
        process.exit();
    }
}

function LCMNaive(n, m) {
    var max = Math.max(n, m);
    var min = Math.min(n, m);
    var multi = Math.ceil(max / min)*min;
    while (multi % max !== 0)
        multi += min;
        return multi
}
