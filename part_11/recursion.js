const countDown = (number) => {
  if (number === 0) {
    console.log(`Finally reached here`);
    return;
  }
  console.log(`number: ${number}`);
  return countDown(number - 1);
};

countDown(5);