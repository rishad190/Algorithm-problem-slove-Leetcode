var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    console.log(target - nums[i]);

    if (map.has(target - nums[i]) && i != map.get(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
  }
};
let nums = [3, 2, 4];
let target = 6;
const result = twoSum(nums, target);
console.log(result);
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits);
