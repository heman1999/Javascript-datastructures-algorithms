/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
var partition = function (s) {
  let res = [];
  function _partition(ip, op) {
    if (!op.length) {
      res.push(ip);
    } else {
      for (let i = 0; i < op.length; i++) {
        if (isPalindrome(op.slice(0, i + 1))) {
          _partition([...ip, op.slice(0, i + 1)], op.slice(i + 1));
        }
      }
    }
  }
  _partition([], s);
  return res;
};

console.log("res", partition("nitin"));
