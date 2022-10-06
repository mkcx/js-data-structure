function factorial(number) {
  console.trace()
  if (number === 1 || number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}

console.log(factorial(5))
