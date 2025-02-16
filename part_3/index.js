class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
}