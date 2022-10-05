import Stack from '../../js/stack'

function decToDin(decNumber) {
  const stack = new Stack()
  while (decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const output = document.getElementById('output')
btn.onclick = function () {
  output.value = decToDin(input.value)
}
