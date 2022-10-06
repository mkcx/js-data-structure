import HashTableLinearSearch from '../../js/hashTableLinearSearch'
import cloneDeep from 'lodash/cloneDeep'
const hashTableLinearSearch = new HashTableLinearSearch()

hashTableLinearSearch.put('Ygritte', 'ygritte@qq.com')
hashTableLinearSearch.put('Jonathan', 'Jonathan@qq.com')
hashTableLinearSearch.put('Jamie', 'Jamie@qq.com')
hashTableLinearSearch.put('jack', 'jack@qq.com')
hashTableLinearSearch.put('jasmine', 'jasmine@qq.com')
hashTableLinearSearch.put('jake', 'jake@qq.com')
hashTableLinearSearch.put('Nathan', 'Nathan@qq.com')
hashTableLinearSearch.put('Athelstan', 'Athelstan@qq.com')
hashTableLinearSearch.put('Sue', 'Sue@qq.com')
hashTableLinearSearch.put('aethelwulf', 'aethelwulf@qq.com')
hashTableLinearSearch.put('Sargeras', 'Sargeras@qq.com')

console.log(hashTableLinearSearch)

console.log(
  'Sue的hash值:',
  hashTableLinearSearch.hashCode('Sue'),
  'Sue的value:',
  hashTableLinearSearch.get('Sue')
)
const search2 = cloneDeep(hashTableLinearSearch)
console.log('删除Sue：', search2.remove('Sue'))
console.log(search2)
