const countDown = (number) => {
  if (number === 0) {
    console.log(`Finally reached here`);
    return;
  }
  console.log(`number: ${number}`);
  return countDown(number - 1);
};

countDown(5);

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

console.log(factorial(5));
