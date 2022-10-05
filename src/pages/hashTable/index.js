import HashTable from '../../js/hashTable'
// 普通散列表测试代码
const hash = new HashTable()
hash.put('Gandalf', 'gandalf@qq.com')
hash.put('John', 'john@qq.com')
hash.put('Tyrion', 'tyrion@qq.com')

console.log(hash)

console.log('查找john的值', hash.get('John'))
console.log('查找jerry的值', hash.get('jerry'))
console.log('使用toString', hash.toString())
