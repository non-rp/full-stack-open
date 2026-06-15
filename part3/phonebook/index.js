import express from 'express';
import morgan from 'morgan'
import Person from './models/person.js';

morgan.token('user', (req, res) => {
  return JSON.stringify(req.body)
})

const app = express();
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :user'))
app.use(express.static('dist'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/info', (req, res) => {
  Person.countDocuments({}).then(count => {
    const info = `Phonebook has info for ${count} people </br> ${new Date().toString()}`

    res.send(info)
  })
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id

  Person.findById(id)
    .then(person => {
      if(person) {
        res.json(person)
      } else {
        return res.status(404).json({ error: `Person id:${id} undefined` })
      }
    })
    .catch(error => {
      console.log(error)
      // res.status(500).end()
      // res.status(400).send({ error: 'malformated id'})
      next(error) // if without argument jump ti next route or middlewear, if with argument go to error handler middlewear
    })
})

app.delete('/api/persons/:id', (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(err => next(err))
})

app.post('/api/persons', (req, res) => {
  if(!req.body) return res.status(400).json({ error: 'Person missing!'})

  const {name, number} = req.body

  if(!name || !number ) return res.status(400).json({error: 'No valid data!'})

  const person = new Person({
    name,
    number
  })

  person.save()
    .then(result => {
      res.json(result)
    })
    .catch(err => next(err))
})

app.put('/api/persons/:id', (req, res) => {
  const { name, number } = req.body

  const person = {
    name,
    number
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(err => next(err))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if(error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id'})
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})
