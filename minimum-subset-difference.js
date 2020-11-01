/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  if (stones.length == 1) {
    return stones[0];
  }
  let [result, sum] = sumSubset(stones);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < result.length / 2; i++) {
    if (result[i]) {
      min = Math.min(min, sum - 2 * i);
    }
  }
  return min;
};

var sumSubset = function (nums) {
  let sum = nums.reduce((acc, num) => (acc += num), 0);
  let n = nums.length;
  let w = sum;
  let result = new Array(w).fill(false);

  result[0] = true;
  for (let i = 0; i < n; i++) {
    for (let j = w; j > 0; j--) {
      if (nums[i] <= j) {
        result[j] = result[j] || result[j - nums[i]];
      }
    }
  }

  return [result, sum];
};
