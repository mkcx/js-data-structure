function LinkList() {
  this.head = null
  this.length = 0
  // 内部类用于生成newNode新元素
  function NewNode(data) {
    this.data = data
    this.next = null
  }

  LinkList.prototype.append = function (data) {
    const newNode = new NewNode(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  LinkList.prototype.toString = function () {
    let ListString = ''
    let current = this.head
    while (current) {
      ListString += current.data + ' '
      current = current.next
    }
    return ListString
  }

  LinkList.prototype.insert = function (position, data) {
    if (typeof position !== 'number') {
      throw Error('position should be a Number')
    }
    if (position < 0 || position > this.length) return false
    const newNode = new NewNode(data)
    if (position === 0) {
      // 将头部置换为新的元素
      const current = this.head
      newNode.next = current
      this.head = newNode
    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    this.length++
    return true
  }

  LinkList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  LinkList.prototype.indexOf = function (data) {
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

  LinkList.prototype.update = function (position, element) {
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

  LinkList.prototype.removeAt = function (position) {
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

  LinkList.prototype.remove = function (data) {
    // 先找出位置
    let position = this.indexOf(data)
    // 根据位置信息删除元素
    return this.removeAt(position)
  }

  LinkList.prototype.isEmpty = function () {
    return this.length === 0
  }

  LinkList.prototype.size = function () {
    return this.length
  }
}

export default LinkList
