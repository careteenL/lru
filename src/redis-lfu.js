/**
 * @desc LFU (最近最不频繁使用) 缓存机制
 * @leetcode
 * @param {number} capacity
 */
export default class LFU {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    let temp = this.cache.get(key);
    if (temp) {
      this.cache.set(key, {
        ...temp,
        visitTimes: temp.visitTimes + 1,
      });
      return temp.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      let temp = this.cache.get(key);
      this.cache.set(key, {
        ...temp,
        visitTimes: temp.visitTimes + 1,
      });
    } else if (this.cache.size >= this.capacity) {
      const minVisitItem = {
        key: "",
        visitTimes: 0,
      };
      this.cache.keys().forEach((key) => {
        const currentVal = this.cache.get(key);
        if (currentVal.visitTimes <= minVisitItem.visitTimes) {
          minVisitItem.key = key;
          minVisitItem.visitTimes = currentVal.visitTimes;
        }
      });
      if (minVisitItem.key) {
        this.cache.delete(minVisitItem.key);
      }
    }
    this.cache.set(key, {
      value,
      visitTimes: 0,
    });
  }
}
