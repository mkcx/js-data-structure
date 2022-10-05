import defaultToString from '../utils/defaultToString'
import ValuePair from '../utils/ValuePair'
class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  // has(key)方法，检测字典集合中是否有该值
  has(key) {
    return this.table[this.toStrFn(key)] != null
  }
  // set(key, value)方法，字典集合添加元素
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  // remove(key)方法，通过key移除字典中的某一项
  remove(key) {
    if (this.has(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  // get(key)，搜索字典中的某一个值
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  // keyValues()，返回字典所有的键值对
  keyValues() {
    if (Object.values) {
      return Object.values(this.table)
    } else {
      const keyValues = []
      for (const k in this.table) {
        if (this.has(k)) {
          keyValues.push(this.table[k])
        }
      }
      return keyValues
    }
  }

  // keys()方法，返回所有的key
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }

  // values()，返回所有的value
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }

  // size()方法，返回字典的长度
  size() {
    return Object.keys(this.table).length
  }
  // isEmpty方法，判断字典是否为空
  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`
    }
    return objString
  }

  forEach(callback) {
    if (this.isEmpty() || !callback) {
      return false
    }
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      callback(valuePairs[i].key, valuePairs[i].value)
    }
  }
}

export default Dictionary
