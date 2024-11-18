const EventEmitter = require('events')
const { cursorTo } = require('readline')
const customEmitter = new EventEmitter()

const calculate = (a, b) => {
	return a + b
}
customEmitter.on('response', () => {
	console.log(calculate(2, 3))
})
customEmitter.emit('response')
setTimeout(() => {
	customEmitter.emit('res', () => {})
}, 3000)

customEmitter.on('res', () => {
	console.log('Goodbye, there!')
})
