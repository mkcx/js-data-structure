import HashTableSeparateChaining from '../../js/hashTableSeparateChaining'

const hashTableSeparateChaining = new HashTableSeparateChaining()
hashTableSeparateChaining.put('小明', 'xiaoming@qq.com')
hashTableSeparateChaining.put('小明', 'xiaoming2@qq.com')
console.log(hashTableSeparateChaining)
console.log(hashTableSeparateChaining.get('小明'))
console.log('调用toString方法：', hashTableSeparateChaining.toString())
