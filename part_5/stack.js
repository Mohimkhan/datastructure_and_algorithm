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

    if (this.length === 0) return;

    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  min() {
    if (this.length === 0) return undefined;
    
    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;

      if (current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }
}

// {first: {value: 1, next: {value: 2, next: {value: 3, next: null}}}}

const stack = new Stack(1);
console.log("push ", stack.push(2));
console.log("push ", stack.push(3));
console.log("pop ", stack.pop());
console.log("min ", stack.min());
console.log("stack: ", stack);
