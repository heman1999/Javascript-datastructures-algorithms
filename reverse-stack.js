function reverse(arr) {
  if (arr.length === 1) {
    return;
  }
  let temp = arr.pop();
  reverse(arr);
  insert(arr, temp);
}

function insert(arr, ele) {
  if (arr.length === 0) {
    arr.push(ele);
    return;
  }
  let temp = arr.pop();
  insert(arr, ele);
  arr.push(temp);
}

let arr = [60, 2, 3, 144, 5];
reverse(arr);
console.log(arr);
