function Fibonacci(n) {
    var arr = [0, 1, 1];
    for (var i = 2; i < n; i++) {
        arr.push(arr[i] + arr[i - 1]);
    }
    return arr[n]
}

function Test(n) {
    var timeIn = new Date().getTime();
    console.log(Fibonacci(n));
    var timeOut = new Date().getTime();
    console.log('Time (ms): ' + (timeOut - timeIn));
    timeIn = 0;
    timeOut = 0;
}