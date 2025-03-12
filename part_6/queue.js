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
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this.last;
  }

  dequeue() {
    let temp = this.first;

    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp;
  }
}

const queue = new Queue(1);
queue.enqueue(1);
queue.enqueue(2); 
queue.dequeue();
console.log({queue});
