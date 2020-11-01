function hashFunc(str) {
  return str.split("").sort().join();
}

var groupAnagrams = function (strs) {
  let hash = {};
  strs.forEach((str) => {
    hash[hashFunc(str)]
      ? hash[hashFunc(str)].push(str)
      : (hash[hashFunc(str)] = [str]);
  });
  let res = [];
  Object.keys(hash).forEach((key) => {
    res.push(hash[key]);
  });
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
