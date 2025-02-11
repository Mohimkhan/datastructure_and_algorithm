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
}

const arr1 = new MyOwnArray();

arr1.push("Hello");

console.log(arr1);
