import LinkedList from './linkedList'
import defaultToString from '../utils/defaultToString'
import ValuePair from '../utils/ValuePair'

class HashTableSeparateChaining {
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
  // put(key, value)
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].append(new ValuePair(key, value))
      return true
    }
    return false
  }

  // get(key)
  get(key) {
    const position = this.hashCode(key)
    const LinkedList = this.table[position]
    if (LinkedList != null && !LinkedList.isEmpty()) {
      let current = LinkedList.getHead()
      while (current != null) {
        if (current.data.key === key) {
          return current.data.value
        }
        current = current.next
      }
    }
    return undefined
  }

  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.data.key === key) {
          linkedList.remove(current.data)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
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
export default HashTableSeparateChaining
