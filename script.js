function fibonacci(num) {
  
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    const fib = [0, 1];
    for (let i = 2; i < num.length; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.logfibonacci(num);

module.exports = fibonacci;
