// Find duplicate elements and print the no. of times they are repeated
function duplicate(arr) {
  let dup = 0;
  let hash = {};
  arr.forEach((element) => {
    if (hash.hasOwnProperty(element)) {
      ++hash[element];
    } else {
      hash[element] = 1;
    }
  });
  Object.keys(hash).forEach((key) => {
    if (hash[key] > 1) {
      dup++;
      console.log(`${key} repeated ${hash[key]} no. of times`);
    }
  });
  if (!dup) {
    console.log("No duplicate elements");
  }
}

duplicate([1, 2, 3, 1, 2, 4, 6, 5, 4, 2]);
