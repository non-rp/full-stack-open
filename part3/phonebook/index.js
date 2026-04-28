import express from 'express';
import morgan from 'morgan'


morgan.token('user', (req, res) => {
  return JSON.stringify(req.body)
})

const app = express();
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :user'))

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
  
  const person = persons.find(p => p.id === Number(req.params.id))

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
  if(!req.body) return res.status(400).json({ error: 'Person missing!'})

  const {name, number} = req.body

  if(!name || !number ) return res.status(400).json({error: 'No valid data!'})

  const exists = persons.some(p => p.name === name)
  if(exists) return res.status(400).json({ error: 'Name must be unique' })

  const newPerson = {
    'id': Math.floor(Math.random() * 2048),
    name, 
    number
  }

  persons.push(newPerson)

  res.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})