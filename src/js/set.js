function Set() {
  // 属性
  this.items = {}

  // add方法
  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false
    }
    this.items[value] = value
    return true
  }

  // has方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.remove = function (value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  Set.prototype.values = function () {
    return Object.keys(this.items)
  }

  Set.prototype.clear = function () {
    this.items = {}
  }

  // 集合操作
  // 1. 并集
  Set.prototype.union = function (others) {
    // 1.1 新建一个集合
    const unionSet = new Set()
    // 1.2 将自身的元素添加到新建的集合中
    let values = this.values()
    values.forEach((item) => {
      unionSet.add(item)
    })
    // 1.3 将要和并集合元素添加到新集合中
    values = others.values()
    values.forEach((item) => {
      unionSet.add(item)
    })
    // 1.4 将最终集合返回
    return unionSet
  }

  // 2. 交集
  Set.prototype.intersection = function (others) {
    // 2.1 新建一个并集
    const intersectionSet = new Set()
    // 2.2 获取当前集合的元素，判断如果同时存在于others集合中，将元素添加到新建的集合中
    this.values().forEach((item) => {
      if (others.has(item)) {
        intersectionSet.add(item)
      }
    })

    return intersectionSet
  }

  // 3.差集
  Set.prototype.difference = function (others) {
    // 2.1 新建一个并集
    const differenceSet = new Set()
    // 2.2 获取当前集合的元素，判断如果元素同时不属于others集合中，将元素添加到新建的集合中
    this.values().forEach((item) => {
      if (!others.has(item)) {
        differenceSet.add(item)
      }
    })

    return differenceSet
  }

  // 4. 子集
  Set.prototype.subset = function (others) {
    // 如果当前的集合，所有元素都存在于others集合中，返回true，否则返回false
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (!others.has(values[i])) {
        return false
      }
    }
    return true
  }
}

export default Set
