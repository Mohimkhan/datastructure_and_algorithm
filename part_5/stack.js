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

  pop() {
    let temp = this.first;

    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp;
  }
}

// {first: {value: 1, next: {value: 2, next: {value: 3, next: null}}}}

const stack = new Stack(1);
console.log("push ", stack.push(2));
console.log("push ", stack.push(3));
console.log("pop ", stack.pop());
console.log("stack: ", stack);
