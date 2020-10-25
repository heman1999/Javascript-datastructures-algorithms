// Find the largest rectangular area possible in a given histogram
// where the largest rectangle can be made of a number of contiguous
// bars. For simplicity, assume that all bars have same width and
// the width is 1 unit.

function nsl(arr) {
  let stack = [];
  let left = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      left.push(-1);
    } else if (stack.length > 0) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        left.push(-1);
      } else {
        left.push(stack[stack.length - 1]);
      }
    }
    stack.push(i);
  }
  return left;
}

function nsr(arr) {
  let stack = [];
  let right = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      right.push(7);
    } else if (stack.length > 0) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        right.push(7);
      } else {
        right.push(stack[stack.length - 1]);
      }
    }
    stack.push(i);
  }
  return right.reverse();
}

function mah(arr) {
  let left = nsl(arr);
  let right = nsr(arr);
  let area = [];
  for (let i = 0; i < arr.length; i++) {
    let width = right[i] - left[i] - 1;
    area[i] = width * arr[i];
  }
  return area;
}

console.log(mah([6, 2, 5, 4, 5, 1, 6]));
