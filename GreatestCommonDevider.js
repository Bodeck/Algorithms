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
        console.log(EuclidesAlgorithm(n, m));
        process.exit();
    }
}

function EuclidesAlgorithm(n, m) {
    var r;
    while (m !== 0) {
        r = n % m;
        n = m;
        m = r;
    }
    return n
}
