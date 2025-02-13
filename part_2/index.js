/**
 * ? Q:[reverse_string]
 */

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reverseString("mohim"));

/**
 * ? Q:[palindrome]
 */

const isPalindrome = (str) => {
  if (str.toLowerCase() === reverseString(str.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPalindrome("faf"));

/**
 * ? Q:[reverse_integer]
 */

const reverseInteger = (int) => {
  return +int.toString().split("").reverse().join("");
};

// console.log(reverseInteger(5678));

const sentenceCapitalizer = (sen) => {
  const senArr = sen.toLowerCase().split(" ");
  if (senArr.length === 0) return sen;

  if (senArr.length === 1) {
    return `${senArr[0][0].toUpperCase()}${senArr[0].slice(1)}`;
  }

  return `${senArr[0][0].toUpperCase()}${senArr[0].slice(
    1
  )} ${senArr[1][0].toUpperCase()}${senArr[1].slice(1)}`;
};

console.log(sentenceCapitalizer("hello world"));
