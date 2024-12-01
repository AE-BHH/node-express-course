const express = require('express')
const app = express()
const { products } = require('./data')

app.use(express.static('./public'))

app.get('/api/v1/products', (req, res) => {
	const newProducts = products.map((item) => {
		const { id, name, price } = item
		return { id, name, price }
	})
	res.json(newProducts)
})

app.get('/api/v1/products/:productID', (req, res) => {
	console.log(res)
	const { productID } = req.params

	const productByID = products.find(
		(product) => product.id === parseInt(productID)
	)
	if (!productByID) {
		return res.status(404).json({ message: 'Product not found!' })
	} else {
		res.json(productByID)
	}
})

app.get('/api/v1/query', (req, res) => {
	const { search, limit, price } = req.query
	let sortedProducts = [...products]

	if (price) {
		sortedProducts = sortedProducts.filter((product) => {
			const productPrice = product.price
			console.log(productPrice)
			return (
				productPrice >= parseFloat(price) && productPrice <= parseFloat(price)
			)
		})
	}

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			// console.log(product)
			return product.name.startsWith(search)
		})
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, parseInt(limit))
	}

	if (sortedProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] })
	}

	res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
	res.status(404).send('Not Found!')
})

const PORT = 3000
app.listen(PORT, () => {
	console.log('Server is listening on port 3000')
})
