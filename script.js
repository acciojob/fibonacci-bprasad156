function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
}
console.log(fibonacciSeries(num));

module.exports = fibonacci;
