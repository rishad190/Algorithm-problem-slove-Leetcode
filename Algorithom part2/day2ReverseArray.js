var rotate = function (nums, k) {
  if (k < nums.length) {
    const pop = nums.splice(nums.length - k);
    nums.unshift(...pop);
  }
  if (k > nums.length) {
    const pop = nums.splice(nums.length - (k % nums.length));
    let check = k % nums.length;
    nums.unshift(...pop);
  }
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 8;
console.log(rotate(nums, k));
