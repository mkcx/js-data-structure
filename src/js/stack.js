// // 栈数据结构
//  function Stack() {
//   this.items = []
//   Stack.prototype.push = function (element) {
//     this.items.push(element)
//   }

//   Stack.prototype.pop = function (element) {
//     return this.items.pop()
//   }

//   Stack.prototype.peek = function () {
//     return this.items[this.items.length - 1]
//   }

//   Stack.prototype.isEmpty = function () {
//     return this.items.length === 0
//   }

//   Stack.prototype.size = function () {
//     return this.items.length
//   }

//   Stack.prototype.toString = function () {
//     let resultText = ''
//     for (let index = 0; index < this.items.length; index++) {
//       resultText += this.items[index] + ' '
//     }
//     return resultText
//   }
// }

function Stack() {
  this.items = []
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }

  Stack.prototype.pop = function (element) {
    return this.items.pop()
  }

  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }

  Stack.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  Stack.prototype.size = function () {
    return this.items.length
  }

  Stack.prototype.toString = function () {
    let resultText = ''
    for (let index = 0; index < this.items.length; index++) {
      resultText += this.items[index] + ' '
    }
    return resultText
  }
}

export default Stack
