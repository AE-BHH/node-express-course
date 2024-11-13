const http = require('http')

// console.log(http)

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to my first web page!')
	}
	if (req.url === '/products') {
		res.end('Our products are listed below!')
	}
	if (req.url === '/contacts') {
		res.end('Feel free to get in touch with us with any questions!')
	}
	res.end(`
        <h3>404 Not Found!</h3>
        <p>We can't process your request now. Try later.</p>
        <a href="/">HOME</a>
        `)
})
console.log('works!!')
const PORT = 3000

server.listen(PORT)
