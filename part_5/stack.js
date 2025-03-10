class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
    this.length++;

    return newNode;
  }
}

// {first: {value: 1, next: null}}

const stack = new Stack(1);
console.log(stack.push(2))
console.log(stack.push(3))
console.log("stack: ", stack);
