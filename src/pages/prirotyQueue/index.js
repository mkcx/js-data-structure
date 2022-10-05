import PriorityQueue from '../../js/priorityQueue'

const priorityQueue = new PriorityQueue()
console.log('裂变结构', priorityQueue)
priorityQueue.enqueue('abc', 110)
priorityQueue.enqueue('cba', 99)
priorityQueue.enqueue('nba', 100)
priorityQueue.enqueue('fifa', 102)
console.log(priorityQueue.toString())
