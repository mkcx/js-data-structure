function DoublyLinkList() {
  // 内部类增加节点
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  this.head = null
  this.tail = null
  this.length = 0

  // 添加节点方法
  DoublyLinkList.prototype.append = function (data) {
    // 1.创建节点
    const newNode = new Node(data)
    if (this.length === 0) {
      // 2.1判断是否第一个节点
      this.head = newNode
      this.tail = newNode
    } else {
      // 2.1链表不为空
      // 3.1 将新的节点的prev赋值给尾部即链表的最后一项
      newNode.prev = this.tail
      // 3.2 将链表的next指向新的元素
      this.tail.next = newNode
      // 3.3 最后将链表的尾部指向新的元素
      this.tail = newNode
    }
    this.length += 1
  }

  // 转换为字符串3方法
  DoublyLinkList.prototype.toString = function () {
    return this.forwardString()
  }
  DoublyLinkList.prototype.forwardString = function () {
    let current = this.head
    let resultStr = ''
    while (current) {
      resultStr += current.data + ' '
      current = current.next
    }
    return resultStr
  }
  DoublyLinkList.prototype.backwardString = function () {
    let current = this.tail
    let resultStr = ''
    while (current) {
      resultStr += current.data + ' '
      current = current.prev
    }
    return resultStr
  }

  // 链表插入元素方法
  DoublyLinkList.prototype.insert = function (position, data) {
    // 越界判断
    if (position < 0 || position >= this.length) return false
    const newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length - 1) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let index = 0
        let current = this.head
        let previous = null
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = newNode
        newNode.prev = previous
        newNode.next = current
        current.prev = newNode
      }
    }
    return (this.length += 1)
  }

  // get方法
  DoublyLinkList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    if (position <= this.length / 2) {
      let index = 0
      let current = this.head
      while (index++ < position) {
        current = current.next
      }
      return current.data
    } else {
      let index = this.length
      let current = this.head
      while (index-- > position) {
        current = current.next
      }
      return current.data
    }
  }

  // indexOf方法
  DoublyLinkList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index += 1
    }
    // 找到最后一位没找到则返回-1
    return -1
  }

  // update方法
  DoublyLinkList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) return false
    if (position <= this.length / 2) {
      let current = this.head
      let index = 0
      while (index++ < position) {
        current = current.next
      }
      current.data = newData
    } else if (position > this.length / 2) {
      let current = this.tail
      let index = this.length
      while (index-- > position) {
        current = current.prev
      }
      current.data = newData
    }
    return true
  }

  // removeAt方法
  DoublyLinkList.prototype.removeAt = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return false
    let current = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.next.prev = current.prev
        current.prev.next = current.next
      }
    }
    this.length -= 1
    return current.data
  }

  // remove方法
  DoublyLinkList.prototype.remove = function (data) {
    // 1.先找到下标位置
    let index = this.indexOf(data)
    // 2.通过下标移除元素
    return this.removeAt(index)
  }

  DoublyLinkList.prototype.size = function () {
    return this.length
  }

  // isEmpty方法
  DoublyLinkList.prototype.isEmpty = function () {
    return this.length === 0
  }

  DoublyLinkList.prototype.getHead = function () {
    return this.head.data
  }

  DoublyLinkList.prototype.getTail = function () {
    return this.tail.data
  }
}
export default DoublyLinkList
