var findTargetSumWays = function (nums, S) {
  let sum = nums.reduce((a, b) => a + b, 0);
  sum = (sum + S) / 2;
  if (!Number.isInteger(sum)) return 0;
  function sumSubset(n, sum) {
    let dp = new Array(sum + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
      for (let j = sum; j > 0; j--) {
        if (nums[i] <= j) {
          dp[j] = dp[j] + dp[j - nums[i]];
        }
      }
    }
    return dp[sum];
  }
  return sumSubset(nums.length, sum);
};

