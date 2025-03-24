const wordCounter = (text, word) => {
  // attempt 1

  const regex = new RegExp(`${word}`, "ig");
  return text.match(regex).length;

  // attempt 2
  // return text.split(" ").filter((str) => str.toLowerCase() === word.toLowerCase()).length;
};

console.log(wordCounter("Hello my name name name is mohim", "name"));

const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const compliment = target - num;

    if (compliment in obj && obj[compliment] !== i) {
      return [obj[compliment], i];
    }

    obj[num] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 22));
