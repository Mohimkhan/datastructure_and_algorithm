class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.first.next = newNode;
    this.last = newNode;
    this.length++;
    return this.last;
  }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log({queue});
