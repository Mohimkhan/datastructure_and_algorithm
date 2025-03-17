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

    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index]?.push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][0][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const element = this.keyMap[i];

      if (element) {
        for (let j = 0; j < element.length; j++) {
          const key = element[j][0];
          keys.push(key);
        }
      }
    }

    return keys;
  }
}

const hashTable = new HashTable();
hashTable.set("john", "665-333-909");
hashTable.set("baba", "555-389-939");
hashTable.set("dopa", "355-903-469");
console.log(hashTable.getAllKeys("john"));
