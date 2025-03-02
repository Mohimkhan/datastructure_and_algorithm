class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
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
}

// {value: 1, next: {value: 10, next: {value: 25, next: null}}}

const myLinkList = new LinkList(1);
myLinkList.push(10);
myLinkList.push(25);
myLinkList.push(40);
myLinkList.pop();
myLinkList.unshift(5);
myLinkList.shift();
console.log(myLinkList.firstElement);
console.log(myLinkList.lastElement);
console.log(myLinkList.elementByIndex(1));
console.log(myLinkList.updateByIndex(1, 20));
console.log(myLinkList);
