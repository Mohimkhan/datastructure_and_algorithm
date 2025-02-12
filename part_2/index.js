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

console.log(reverseInteger(5678));
