var sortedSquares = function (nums) {
  let result = new Array(nums.length);
  console.log(result);
  let l = 0;
  let r = nums.length - 1;
  let i = nums.length - 1;
  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      result[i] = Math.pow(nums[l], 2);
      l++;
    } else {
      result[i] = Math.pow(nums[r], 2);
      r--;
    }
    i--;
  }
  return result;
};
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
