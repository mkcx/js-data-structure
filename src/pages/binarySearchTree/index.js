import BinarySearchTree from '../../js/binarySearchTree'

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
console.log('tree', tree)

tree.inOrderTraverse((key) => {
  console.log(key)
})

tree.preOrderTraverse((key) => {
  console.log('先序遍历', key)
})

tree.postOrderTraverse((key) => {
  console.log('后序遍历', key)
})

console.log('树的最小值', tree.min())
console.log('树的最大值', tree.max())
console.log('1是否存在树中：', tree.search(1))
console.log('20是否存在树中：', tree.search(20))
