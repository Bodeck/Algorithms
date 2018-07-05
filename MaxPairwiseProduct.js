var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

rl.on('line', readLine);
var lineCount = 0;
var n = 0;
function readLine(line) {
    var intArr;
    if (line !== "") {
        lineCount++;
        if (lineCount === 1) {
            n = parseInt(line, 10)
        } else if (lineCount === 2) {
            intArr = line.split(" ").map(Number);
            console.log('output: ' + getMax(intArr, n));
            process.exit();
        }
    }
    else {
        process.exit();
    }
}

function getMax(intArr, n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i !== j) {
                result = Math.max(result, intArr[i] * intArr[j]);
            }
        }
    }
    return result
}

function getMaxFast(n, intArr) {
    var index1 = 0;
    var index2 = 0;
    for (var i = 1; i < n; i++) {
        if (intArr[i] > intArr[index1]) index1 = i;
    }
    for (var i = 1; i < n; i++) {
        if (intArr[i] > intArr[index2] && intArr[i] !== intArr[index1]) index2 = i;
    }
    return intArr[index1]*intArr[index2]
}

console.log(getMaxFast(2,[1,2]));
console.log(getMaxFast(2,[2,1]));