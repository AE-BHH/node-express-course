const express = require('express')
const app = express()
const peopleRouter = require('./routes/people')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1/people', peopleRouter)

// const logger = (req, res, next) => {
// 	const method = req.method
// 	const url = req.url
// 	const time = new Date().getFullYear()
// 	console.log(method, url, time)
// 	next()
// }
// //middleware
// app.use(logger)

// app.get('/', logger, (req, res) => {
// 	res.send('HOME PAGE')
// })

// app.get('/api/v1/postman/people', logger, (req, res) => {
// 	res.status(200).json({ success: true, data: people })
// })

// app.post('/api/v1/postman/people', (req, res) => {
// 	const { name } = req.body
// 	if (!name) {
// 		return res
// 			.status(400)
// 			.json({ success: false, msg: 'Please provide a name' })
// 	}
// 	people.push({ id: people.length + 1, name: req.body.name })
// 	res.status(201).json({ success: true, name: req.body.name })
// })

// app.post('/login', (req, res) => {
// 	const { name } = req.body

// 	if (name) {
// 		return res.status(200).send(`Welcome, ${name}`)
// 	}
// 	res.status(401).send('Please provide credentials')
// })

const PORT = 3000
app.listen(PORT, () => {
	console.log('Server is listening on port 3000')
})
