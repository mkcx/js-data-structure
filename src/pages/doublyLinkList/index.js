import DoublyLinkList from '../../js/doubleLinkList'

const doublyLinkList = new DoublyLinkList()
doublyLinkList.append('cad')
doublyLinkList.append('nx')
doublyLinkList.append('sw')
console.log('append结果', doublyLinkList)
console.log('toString', doublyLinkList.toString())
console.log('forwardString', doublyLinkList.forwardString())
console.log('backwardString', doublyLinkList.backwardString())
console.log(doublyLinkList.insert(0, 'catia'))
doublyLinkList.insert(3, 'proe')
doublyLinkList.insert(2, 'ug')
console.log('inset结果', doublyLinkList)
console.log('toString', doublyLinkList.toString())
console.log('forwardString', doublyLinkList.forwardString())
console.log('backwardString', doublyLinkList.backwardString())
console.log('get方法', doublyLinkList.get(5))
console.log('get方法', doublyLinkList.get(2))

// 测试indexOf方法
console.log('cad 的indexOf', doublyLinkList.indexOf('cad'))
console.log('cad 的indexOf', doublyLinkList.indexOf('nba'))

// update方法测试
doublyLinkList.update(1, 'nba')
console.log('update前到后', doublyLinkList.toString())
doublyLinkList.update(5, 'cba')
console.log('update后到前', doublyLinkList.toString())

// removeAt方法
doublyLinkList.removeAt(0)
console.log('removeAt(0)', doublyLinkList.toString())
doublyLinkList.removeAt(doublyLinkList.length - 1)
console.log('removeAt(doublyLinkList.length - 1)', doublyLinkList.toString())
doublyLinkList.removeAt(2)
console.log('removeAt(2)', doublyLinkList.toString())

doublyLinkList.remove('cba')
console.log('remove("cba")', doublyLinkList.toString())
