import BetterHashTable from '../../js/betterHashTable'
import cloneDeep from 'lodash/cloneDeep'
const betterHashTable = new BetterHashTable()

betterHashTable.put('Ygritte', 'ygritte@qq.com')
betterHashTable.put('Jonathan', 'Jonathan@qq.com')
betterHashTable.put('Jamie', 'Jamie@qq.com')
betterHashTable.put('jack', 'jack@qq.com')
betterHashTable.put('jasmine', 'jasmine@qq.com')
betterHashTable.put('jake', 'jake@qq.com')
betterHashTable.put('Nathan', 'Nathan@qq.com')
betterHashTable.put('Athelstan', 'Athelstan@qq.com')
betterHashTable.put('Sue', 'Sue@qq.com')
betterHashTable.put('aethelwulf', 'aethelwulf@qq.com')
betterHashTable.put('Sargeras', 'Sargeras@qq.com')

console.log(betterHashTable)

console.log(
  'Sue的hash值:',
  betterHashTable.hashCode('Sue'),
  'Sue的value:',
  betterHashTable.get('Sue')
)
const search2 = cloneDeep(betterHashTable)
console.log('删除Sue：', search2.remove('Sue'))
console.log(search2)
