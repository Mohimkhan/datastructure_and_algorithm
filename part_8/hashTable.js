class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let sum = 0;

    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;

      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) this.keyMap = [];

    this.keyMap[index]?.push([key, value]);
    return this;
  }
}

const hashTable = new HashTable();
console.log(hashTable.set("john", "555-333-999"));
