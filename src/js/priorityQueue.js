// 优先级队列
function PriorityQueue() {
  this.items = []
  // 创建内部函数保存传进来的元素
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  PriorityQueue.prototype.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority)
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let isEnQueue = false
      QueueElement(element, priority)
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          isEnQueue = true
          break
        }
      }
      if (!isEnQueue) {
        this.items.push(queueElement)
      }
    }
  }

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }

  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  PriorityQueue.prototype.size = function () {
    return this.items.length
  }

  PriorityQueue.prototype.toString = function () {
    let resultText = ''
    for (let index = 0; index < this.items.length; index++) {
      resultText +=
        this.items[index].element + '-' + this.items[index].priority + ' '
    }
    return resultText
  }
}

export default PriorityQueue
