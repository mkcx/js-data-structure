import defaultToString from '../utils/defaultToString'
import ValuePair from '../utils/ValuePair'

// 普通散列表
/**
 * 存在的问题：
 * 某些键会生成一样的hash值，后面的会把前面的覆盖掉
 */
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = defaultToString
    this.table = {}
  }

  // loseloseHashCode(key)，散列函数
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    // 为了得到比较小的值，使用hash值和一个任意数做除法的余数，这样可以规避操作数值变量最大表示范围的风险
    return hash % 37
  }

  // 生成hash值
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  // put(key, value)，像散列表增加一个新的项（也能更新散列表）
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  // remove(key)，根据键值从散列表中移除
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  // get(key)，根据键值检索到特定的值
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  // size()
  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`
    }
    return objString
  }
}
export default HashTable
