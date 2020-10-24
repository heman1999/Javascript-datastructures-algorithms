// Given n pairs of parentheses, write a function to generate
// all combinations of well-formed parentheses of length 2*n

function balanced(n) {
  let res = [];
  function _balanced(op, open, close) {
    if (open === 0 && close === 0) {
      res.push(op);
      return;
    }
    if (open !== 0) {
      _balanced(op + "(", open - 1, close);
    }
    if (open < close) {
      _balanced(op + ")", open, close - 1);
    }
  }
  _balanced("", n, n);
  return res;
}

console.log(balanced(3));
