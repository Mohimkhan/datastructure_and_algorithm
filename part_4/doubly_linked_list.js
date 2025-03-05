class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;

    newNode.prev = this.tail;

    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;

    this.length--;

    return temp;
  }
}

const doublyLinkedList = new DoublyLinkedList(1);

doublyLinkedList.push(10);
doublyLinkedList.pop();
console.log("Doubly_Linked_list: ", doublyLinkedList);
