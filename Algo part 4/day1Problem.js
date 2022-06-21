// var middleNode = function (head) {
//   let mid = 0;
//   for (let i = 0; i < head.length; i++) {
//     mid = Math.floor(head.length / 2);

//     if (mid % 2 == 0) {
//       return head.slice(mid);
//     } else {
//       return head.slice(mid);
//     }
//   }
// };
var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

let head = [1, 2, 3, 4, 5];
console.log(middleNode(head));
