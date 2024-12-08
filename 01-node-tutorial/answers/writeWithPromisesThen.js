const { writeFile, readFile } = require('fs').promises

writeFile('./temp.txt', 'This is line 1\n', { flag: 'a' })
	.then(() => {
		return writeFile('./temp.txt', 'this is line 2\n', { flag: 'a' }).then(
			() => {
				return writeFile('./temp.txt', 'this is line 3\n', { flag: 'a' })
			}
		)
	})
	.catch((err) => {
		console.log(err)
	})

readFile('./temp.txt', 'utf8')
	.then((result) => {
		console.log(result)
	})
	.catch((err) => {
		console.log(err)
	})
