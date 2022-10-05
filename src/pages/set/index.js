import Set from '../../js/set'

// const set = new Set()
// console.log('添加abc', set.add('abc'))
// console.log('添加abc 2', set.add('abc'))
// console.log('添加cad', set.add('cad'))
// console.log('添加cba', set.add('cba'))
// console.log('has方法 abc', set.has('abc'))
// console.log('has方法 mba', set.has('mba'))
// console.log('删除abc', set.add('abc'))
// console.log('删除abc', set.add('abc'))

// console.log('长度', set.size())
// console.log('所有值', set.values())
// console.log('清空', set.clear())

// console.log('长度', set.size())
// console.log('所有值', set.values())

// 集合之间的操作
// 1. 并集
const setA = new Set()
setA.add('cba')
setA.add('nba')
setA.add('ibm')

const setB = new Set()
setB.add('cba')
setB.add('cad')
setB.add('catia')

const setC = new Set()
setC.add('cba')
setC.add('nba')
setC.add('ibm')
setC.add('adc')

const unionSet = setA.union(setB)
console.log('并集', unionSet.values())

const intersectionSet = setA.intersection(setB)
console.log('交集', intersectionSet.values())

const differenceSet = setA.difference(setB)
console.log('差集', differenceSet.values())

console.log('A是B的子集？', setA.subset(setB))
console.log('A是C的子集？', setA.subset(setC))
