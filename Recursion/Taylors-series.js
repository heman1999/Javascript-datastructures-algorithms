function Taylor(x, n) {
  let p = 1;
  let f = 1;
  function _Taylor(x, n) {
    if (n === 0) return 1;
    let r = _Taylor(x, n - 1);
    p *= x;
    f *= n;
    return (r += p / f);
  }
  return _Taylor(x, n);
}

const taylor = Taylor(4, 100);
console.log(taylor);
