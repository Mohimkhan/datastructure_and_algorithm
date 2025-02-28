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

    console.log({ prev, temp });
  }
}

const myLinkList = new LinkList(1);
myLinkList.push(10);
myLinkList.push(25);
myLinkList.push(40);
myLinkList.pop();
console.log(myLinkList);
