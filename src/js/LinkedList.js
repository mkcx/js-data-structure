import { Node } from './modules/linked-list'

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append(data) {
    const node = new Node(data)
    if (this.length === 0) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  toString() {
    let ListString = ''
    let current = this.head
    while (current) {
      ListString += current.data + ' '
      current = current.next
    }
    return ListString
  }

  insert(position, data) {
    if (typeof position !== 'number') {
      throw Error('position should be a Number')
    }
    if (position < 0 || position > this.length) return false
    const node = new node(data)
    if (position === 0) {
      // 将头部置换为新的元素
      const current = this.head
      node.next = current
      this.head = node
    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.length++
    return true
  }

  get(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // 获取头部数据
  getHead() {
    return this.head
  }

  indexOf(data) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  update(position, element) {
    // 越界判断
    if (position < 0 || position >= this.length) return false
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = element
    return true
  }

  removeAt(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous = current.next
    }
    this.length--
    return current.data
  }

  remove(data) {
    // 先找出位置
    let position = this.indexOf(data)
    // 根据位置信息删除元素
    return this.removeAt(position)
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }
}
