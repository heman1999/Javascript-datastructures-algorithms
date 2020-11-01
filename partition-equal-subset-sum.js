/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => (acc += num), 0);
  if (sum % 2 !== 0) {
    return false;
  }
  let n = nums.length;
  let w = sum / 2;
  let result = new Array(w + 1).fill(false);

  result[0] = true;
  for (let i = 0; i < n; i++) {
    for (let j = w + 1; j > 0; j--) {
      if (nums[i] <= j) {
        result[j] = result[j] || result[j - nums[i]];
      }
    }
  }

  return result[w];
};

console.log(canPartition([1, 4, 2, 1]));
