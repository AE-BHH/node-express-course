const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', `Hello World!\n`, { flag: 'a' })

const myText = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(myText)
