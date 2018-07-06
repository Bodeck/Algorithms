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
            console.log(getMaxFast(n,intArr));
            process.exit();
        }
    }
    else {
        process.exit();
    }
}

function getMax(n, intArr) {
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
    if (index1 === 0) {
        index2++
    }
    for (var i = 1; i < n; i++) {
        if (intArr[i] > intArr[index2] && i !== index1) index2 = i;
    }
    console.log(index1,index2);
    return intArr[index1] * intArr[index2]
}


function stressTest(N, M) {
    var iteration = 0;
    while (iteration <= 10000) {
        iteration++;
        n = getRandomIntInclusive(2, N)
        var tstArr = [];
        for (let i = 0; i < n; i++) {
            tstArr.push(getRandomIntInclusive(0, M));
        }
        console.log(iteration, tstArr);
        var result1 = getMax(n, tstArr);
        var result2 = getMaxFast(n, tstArr);
        if (result1 === result2) {
            console.log("OK");
        } else {
            console.log("Wrong answer: ", result1, result2);
            break
        }
    }
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
}
