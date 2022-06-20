var reverseWords = function (s) {
  const arrayStore = s.split(" ");
  let result = [];

  for (let i = 0; i < arrayStore.length; i++) {
    const element = arrayStore[i].split("").reverse().join("");
    result.push(element);
  }

  return result.join(" ");
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
