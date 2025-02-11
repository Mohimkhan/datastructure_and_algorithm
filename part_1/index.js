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
}

const arr1 = new MyOwnArray();

arr1.push("Hello");
arr1.push("world");
arr1.push("bangladesh");
arr1.pop();

console.log(arr1);
