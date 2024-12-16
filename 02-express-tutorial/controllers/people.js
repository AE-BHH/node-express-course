const { people } = require('../data')

const addPerson = (req, res) => {
	const { name } = req.body
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: 'Please provide a name' })
	}
	people.push({ id: people.length + 1, name: req.body.name })
	res.status(201).json({ success: true, name: req.body.name })
}
const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people })
}

const findPerson = (req, res) => {
	const { id } = req.params

	const person = people.find((person) => person.id === Number(id))

	if (person) {
		return res.status(200).json({ success: true, data: person })
	} else {
		return res
			.status(404)
			.json({ success: false, msg: `No person found with id ${id}` })
	}
}

const updatePerson = (req, res) => {
	const { id } = req.params
	const { name } = req.body

	const person = people.find((person) => person.id === Number(id))

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `No person found with id ${id}` })
	}
	const newPerson = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name
		}
		return person
	})
	res.status(200).json({ success: true, data: newPerson })
}
const deletePerson = (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id))

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `No person found with id ${req.params.id}` })
	}
	const updatedList = people.filter(
		(person) => person.id !== Number(req.params.id)
	)
	return res.status(200).json({ success: true, data: updatedList })
}

module.exports = {
	addPerson,
	getPeople,
	findPerson,
	updatePerson,
	deletePerson,
}
