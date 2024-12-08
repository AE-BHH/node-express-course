const { writeFile, readFile } = require('fs').promises

const writer = async () => {
	try {
		console.log('works!!!!!!!')

		for (let i = 0; i < 3; i++) {
			await writeFile('./temp.txt', 'Hello, World!\n', { flag: 'a' })
		}
	} catch (error) {
		console.log('The program faced with the following error: ', error)
	}
}

const reader = async () => {
	try {
		const text = await readFile('./temp.txt', 'utf8')
		console.log(text)
		
	} catch (error) {
		console.log('The program broke for the following reason: ', error)
	}
}

const readWrite = async () => {
	await writer()
	await reader()
}

readWrite()
