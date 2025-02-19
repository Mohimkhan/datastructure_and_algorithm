class MyOwnArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(ele) {
    this.data[this.length] = ele;
    this.length++;
    return this.length;
  }

  pop() {
    const lastEle = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastEle;
  }

  shift() {
    const shiftedEle = this.data[0];
    delete this.data[0];
    this.length--;
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length];
    return shiftedEle;
  }

  unshift(...values) {
    const newElements = [...values, ...Object.values(this.data)];
    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      this.data[i] = element;
    }

    this.length = newElements.length;
    return this.length;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

  forEach(cb = () => {}) {
    for (let i = 0; i < this.length; i++) {
      cb(this.data[i], i, Object.values(this.data));
    }
  }

  map(cb = () => {}) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];

      newArr.push(cb(element, i, Object.values(this.data)));
    }

    return newArr;
  }

  filter(cb) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];

      if (cb(element, i, Object.values(this.data))) {
        newArr.push(element);
      }
    }

    return newArr;
  }
}

const arr1 = new MyOwnArray();

arr1.push("Hello");
arr1.push("world");
arr1.push("bangladesh");
arr1.push("dubai");
// arr1.pop();

arr1.shift();
arr1.unshift("bye");

console.log(arr1);
