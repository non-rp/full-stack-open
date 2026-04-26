import express from 'express';

const app = express();
app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
  const info = `Phonebook has info for ${persons.length} people </br> ${new Date().toString()}`

  res.send(info)
})

app.get('/api/persons/:id', (req, res) => {

  const person = persons.find(p => p.id === req.params.id)
  if(!person) {
    return res.status(404).json({ error: 'Missing id' })
  }

  res.send(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  persons = persons.filter(p => p.id !== id)

  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  if(!req.body) return res.status(400).json({ error: 'Person missing'})

  const {name, number} = req.body

  const newPerson = {
    'id': Math.floor(Math.random() * 2048),
    "name": name, 
    "number": number
  }

  persons.push(newPerson)

  res.json(newPerson)
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})