const http = require('http')
const { writeFileSync, createReadStream } = require('fs')

for (let i = 0; i < 100000; i++) {
	writeFileSync('./content/big.txt', `${i}\n`, { flag: 'a' })
}

const stream = createReadStream(
	'./content/big.txt',
	{ encoding: 'utf8' },
	{
		highWaterMark: 200,
	}
)

stream.on('data', (result) => {
	console.log(result)
})

stream.on('error', (err) => console.log(err))
