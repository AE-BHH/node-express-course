const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', `Hello, Sarah!\n`, { flag: 'a' })
writeFileSync('./temporary/fileA.txt', `Hello, Mike!\n`, { flag: 'a' })
writeFileSync('./temporary/fileA.txt', `Hello, Sam!\n`, { flag: 'a' })

const myText = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(myText)
