import LinkList from '../../js/linkList'
const list = new LinkList()
list.append('abc')
list.append('cba')
list.append('dna')
list.insert(0, 'cad')
list.insert(1, 'sw')
list.insert(3, 'ps')
console.log(list.toString())
console.log('调用get方法', list.get(2))
console.log('调用indexOf', list.indexOf('sw'))
console.log('调用indexOf', list.indexOf('999'))
// console.log('调用update方法', list.update(1, '999'))
console.log('调用removeAt方法', list.removeAt(0))
console.log('调用remove方法', list.remove('sw'))
console.log(list)