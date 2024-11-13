const os = require('os')

//console.log(os)

const freeMem = os.freemem();
const user = os.userInfo();

console.log(freeMem)
console.log(user)
console.log(os.hostname())
console.log(os.arch())
console.log(os.availableParallelism())