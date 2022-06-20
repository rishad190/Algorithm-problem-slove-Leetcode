var addTwoNumbers = function (l1, l2) {
  let total = 0;
  let arrayOne = l1.reverse().join("");
  let arrayTwo = l2.reverse().join("");
  total = parseInt(arrayOne) + parseInt(arrayTwo);
  const arrayOfDigits = Array.from(String(total), Number);
  return arrayOfDigits.reverse();
};

let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];
addTwoNumbers(l1, l2);
console.log(addTwoNumbers(l1, l2));
