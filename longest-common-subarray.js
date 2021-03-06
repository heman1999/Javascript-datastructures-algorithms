/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let n = A.length;
  let m = B.length;
  let max = 0;
  let dp = [...new Array(n + 1)].map(() => new Array(m + 1));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      }
    }
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return max;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
