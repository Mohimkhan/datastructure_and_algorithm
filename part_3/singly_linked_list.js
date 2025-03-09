class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) return;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;

    this.length--;
  }

  unshift(value) {
    const newNode = new Node(value);
    const temp = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = temp;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return;

    if (!this.head.next || this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    this.head = this.head.next;
    this.length--;
  }

  get firstElement() {
    return this.head;
  }

  get lastElement() {
    return this.tail;
  }

  elementByIndex(index) {
    const newArr = [];
    let temp = this.head;

    while (temp) {
      newArr.push(temp);
      temp = temp.next;
    }

    return newArr[index];
  }

  updateByIndex(index, value) {
    let temp = this.elementByIndex(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (index === 0) {
      this.unshift(value);
      return;
    }

    if (index === this.length - 1) {
      this.push(value);
      return;
    }

    let temp = this.elementByIndex(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  get size() {
    return this.length - 1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    return true;
  }

  reverseList() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

// {value: 1, next: {value: 10, next: {value: 25, next: null}}}

const myLinkedList = new SinglyLinkedList(1);
myLinkedList.push(10);
myLinkedList.push(25);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.pop();
myLinkedList.unshift(5);
myLinkedList.shift();
console.log(myLinkedList.firstElement);
console.log("last:", myLinkedList.lastElement);
console.log(myLinkedList.updateByIndex(1, 20));
console.log(myLinkedList.elementByIndex(1));
console.log(myLinkedList.insert(2, 69));
// console.log(myLinkedList.clear());
console.log(myLinkedList.reverseList());
console.log("LinkedList: ", myLinkedList);
