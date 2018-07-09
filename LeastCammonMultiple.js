var readline = require('readline');
var bignum = require('bignumber.js');
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
        console.log(LCMFast(n, m));
        process.exit();
    }
}

function LCMNaive(n, m) {
    var max = Math.max(n, m);
    var min = Math.min(n, m);
    var multi = Math.ceil(max / min) * min;
    while (multi % max !== 0)
        multi += min;
    return multi
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

function LCMFast(n, m) {
    x = new bignum(n);
    y = new bignum(m);
    var z = x.times(y);
    var GCM = new bignum(EuclidesAlgorithm(x, y));
    z = z.div(GCM);
    return z.toString()
}

function test(n, m) {
    var strTime = new Date().getTime();
    // console.log(LCMNaive(n, m));
    console.log(LCMFast(n, m));
    var duration = new Date().getTime() - strTime;
    console.log(duration);
}
test(226553150, 1023473145);