/**
 * @desc LRU (最近最少使用) 缓存机制
 * @leetcode https://leetcode-cn.com/problems/lru-cache/
 * @param {number} capacity
 */
export default class LRU {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  get (key) {
    let temp = this.cache.get(key)
    if (temp) {
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    } else {
      return -1
    }
  }

  put (key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
      this.cache.set(key, value)
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value) // map.keys().next().value具有有序性
    }
    this.cache.set(key, value)
  }
}
