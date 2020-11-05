/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  return longestCommonSubsequence(s, s.split("").reverse().join(""));
};

var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};
