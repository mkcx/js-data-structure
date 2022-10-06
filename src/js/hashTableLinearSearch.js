import defaultToString from '../utils/defaultToString'
import ValuePair from '../utils/ValuePair'

class HashTableLinearSearch {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
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

  /**
   * 工具函数弥补移除元素后的副作用
   * @param {*} key 被移除的key
   * @param {*} removePosition 移除的位置
   */
  verifyRemoveSideEffect(key, removePosition) {
    const hash = this.hashCode(key)
    let index = removePosition + 1
    while (this.table[index] != null) {
      // 查出下一个是否位置有值，有的话把它移动到被删除元素的位置
      const posHash = this.hashCode([this.table[index].key])
      if (posHash <= hash || posHash <= removePosition) {
        this.table[removePosition] = this.table[index]
        delete this.table[index]
        removePosition = index
      }
      index++
    }
  }

  // put(key, value)
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] != null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  // get(key)
  get(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
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
export default HashTableLinearSearch
