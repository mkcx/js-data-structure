function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  let fibNMinus2 = 0
  let fibNMinus1 = 1
  let fibN = n
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2
    fibNMinus2 = fibNMinus1
    fibNMinus1 = fibN
  }
  return fibN
}
console.log('iterative；', fibonacciIterative(6))

/**
 * 斐波那契数
 * @param {*} n 表示第n项
 * @returns 返回数列的第n项的值
 */
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
  // let res = null
  // if (n < 1) {
  //   res = 0
  //   console.log('res', res)
  //   return res
  // }
  // if (n <= 2) {
  //   res = 1
  //   console.log('res', res)
  //   return res
  // }
  // res = fibonacci(n - 1) + fibonacci(n - 2)
  // console.log('res', res)
  // return res
}
console.log('recursive:', fibonacci(6))
// const arr = []
// for (let i = 0; i < 7; i++) {
//   arr.push(fibonacci(i))
// }
// console.log(arr)

/**
 * 记忆化的斐波那契数
 * @param {*} n
 */
function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = (n, memo) => {
    if (memo[n] != null) return memo[n]
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
  }
  return fibonacci(n, memo)
}

console.log('66', fibonacciMemoization(6))
