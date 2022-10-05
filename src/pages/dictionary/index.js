import Dictionary from '../../js/dictionary'
// 测试
const dictionary = new Dictionary()
dictionary.set('小明', 'xiaoming@qq.com')
dictionary.set('breath', 'breath@qq.com')
dictionary.set('hua', 'hua_123@qq.com')

console.log('调用has方法 查小明：', dictionary.has('小明'))
console.log('调用size：', dictionary.size())
console.log('调用get方法获取 小明 的value：', dictionary.get('小明'))
console.log('获取所有的keys：', dictionary.keys())
console.log('获取所有的values：', dictionary.values())

console.log('删除 小明 信息：', dictionary.remove('小明'))
console.log('获取所有的keys：', dictionary.keys())
console.log('获取所有的values：', dictionary.values())
console.log('获取所有的键值对：', dictionary.keyValues())
console.log('toString方法：', dictionary.toString())

dictionary.forEach((key, value) => {
  console.log('forEach:', `${key}: ${value}`)
})
