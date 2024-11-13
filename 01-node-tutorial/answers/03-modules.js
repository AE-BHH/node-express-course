const person = require('./04-names')
const sayHello = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHello('Sam Clark')
sayHello(person.firstName + ' ' + person.lastName)

console.log(
	data.personInfo.firstName + ' ' + data.personInfo.lastName,
	data.numbers
)
