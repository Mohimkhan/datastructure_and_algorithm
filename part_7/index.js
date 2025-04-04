/**
 * ? Q[1]: isValidParenthesis
 */

const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false

/**
 * ? Q[2]: reverseStr
 */

const reverseStr = (str) => {
  const stack = [];
  let output = "";

  for (let char of str) {
    stack.push(char);
  }

  for (let _ of str) {
    output += stack.pop();
  }

  return output;
};

console.log(reverseStr("hello world"));
