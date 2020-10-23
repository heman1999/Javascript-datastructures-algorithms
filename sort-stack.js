function sortStack(arr) {
  if (arr.length == 0) {
    return;
  }
  let temp = arr.pop();
  sortStack(arr);
  insert(arr, temp);
  return arr;
}
function insert(arr, num) {
  if (arr.length == 0 || arr[arr.length - 1] < num) {
    arr.push(num);
    return;
  }
  let temp = arr.pop();
  insert(arr, num);
  arr.push(temp);
}

console.log(sortStack([15, 100, 0, 2]));
