function permutation(str) {
  let flag = [];
  let res = [];
  function _permutation() {
    if (res.length === str.length) {
      console.log(res.join(""));
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (!flag[i]) {
        flag[i] = 1;
        res.push(str[i]);
        _permutation();
        flag[i] = 0;
        res.pop();
      }
    }
  }
  _permutation();
}

permutation("ABC");
