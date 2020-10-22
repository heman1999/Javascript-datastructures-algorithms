function Fibonacci(n) {
  let arr = [];
  function _Fibonacci(n) {
    if (n <= 1) {
      arr[n] = n;
      return n;
    }
    if (arr[n] !== undefined) {
      return arr[n];
    }
    return (arr[n] = _Fibonacci(n - 1) + _Fibonacci(n - 2));
  }
  return _Fibonacci(n);
}

console.log(Fibonacci(50));
