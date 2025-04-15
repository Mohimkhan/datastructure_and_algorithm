class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      }
    }
  }

  inludes(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }

    return false;
  }

  // Breadth First Search
  bfs() {
    let current = this.root;
    const queue = [];
    const data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();

      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }

  // Dearth First Search (preorder)
  dfspreOrder(node = this.root, data = []) {
    if (node === null) return data;

    data.push(node.value);

    if (node.left) this.dfspreOrder(node.left, data);
    if (node.right) this.dfspreOrder(node.right, data);

    return data;
  }
  
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.inludes(1))
console.log(tree.bfs());
console.log(tree.dfspreOrder());
