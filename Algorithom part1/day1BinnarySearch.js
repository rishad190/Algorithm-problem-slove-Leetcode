var search = function (nums, target) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];

    if (element == target) {
      return nums.indexOf(element);
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;

console.log(search(nums, target));
// Binary Search
var search = function (nums, target) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    result = Math.floor((left + right) / 2);

    if (nums[result] == target) {
      return result;
    }
    if (target < nums[result]) {
      right = result - 1;
    } else {
      left = result + 1;
    }
  }
  return -1;
};
