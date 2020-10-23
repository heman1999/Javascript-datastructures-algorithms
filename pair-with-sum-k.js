// Print pairs whose sum is equal to k

function pairWithSumK(arr, k) {
  let has = false;
  let hash = {};
  arr.forEach((element) => {
    if (hash[k - element]) {
      has = true;
      console.log(`(${element},${k - element})`);
    }
    hash[element] = 1;
  });
  if (!has) console.log("No pair found");
}

pairWithSumK([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
