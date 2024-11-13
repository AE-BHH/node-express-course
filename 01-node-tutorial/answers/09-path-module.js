const path = require('path')

// console.log(path.dirname)

const filePath = path.join('/01-node-tutorial/', '/answers')
const absolutePath = path.resolve(__dirname, '01-node-tutorial', 'answers')
console.log(filePath)
console.log(absolutePath)