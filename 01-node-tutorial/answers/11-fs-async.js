const { writeFile, readFile } = require('fs')

readFile('./temporary/fileB.txt', 'utf8', (err, res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
	}
})

writeFile(
	'./temporary/fileB.txt',
	'Hello, Ana!\n',
	{ flag: 'a' },
	(err, res) => {
		console.log('works!')
		if (err) {
			console.log('The following error happened', err)
		} else {
			console.log(res)
		}
	}
)
writeFile(
	'./temporary/fileB.txt',
	'Hello, John!\n',
	{ flag: 'a' },
	(err, res) => {
		console.log('works!')
		if (err) {
			console.log('The following error happened', err)
		} else {
			console.log(res)
		}
	}
)
writeFile(
	'./temporary/fileB.txt',
	'Hello, Sarah!\n',
	{ flag: 'a' },
	(err, res) => {
		console.log('works!')
		if (err) {
			console.log('The following error happened', err)
		} else {
			console.log(res)
		}
	}
)
