function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fib.slice(0, num);
}

module.exports = fibonacci;
