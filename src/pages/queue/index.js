import Queue from '../../js/queue'

function passGame(nameLit, num) {
  const queue = new Queue()
  for (let i = 0; i < nameLit.length; i++) {
    queue.enqueue(nameLit[i])
    console.log(queue.toString())
  }
  while (queue.size() > 1) {
    // 没到num这个数时，将前端元素移动后后端
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 当数到N时，将这个元素移除
    queue.dequeue()
  }
  const win = queue.front()
  const index = nameLit.indexOf(win)
  return {
    name: win,
    index
  }
}

const nameList = ['lily', 'liHua', 'tom', 'jerry', 'leo', 'yaso']
const res = passGame(nameList, 2)
console.log(`胜出的时${res.name}, 开始游戏时ta的位置是${res.index}`)
