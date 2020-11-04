/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let lcs = longestCommonSubsequence(word1, word2);
  return word1.length + word2.length - 2 * lcs;
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
