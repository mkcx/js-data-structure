// 因为理想状态下字典的键应为字符串，所以定义一个转换为字符串的方法
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === 'undefined') {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
export default defaultToString
