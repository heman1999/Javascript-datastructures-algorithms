//Move all negative nos. to left of the array

function sortPosNeg(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (arr[i] < 0) ++i;
    while (arr[j] > 0) --j;
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

console.log(sortPosNeg([-1, -1, -2, -4, 5, -7, -8, -9, -10, 10]));
