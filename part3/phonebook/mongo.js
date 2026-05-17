import mongoose from 'mongoose'
import 'dotenv/config'

if (process.argv.length < 4) {
  console.log('give all arguments')
  console.log(process.argv)
  process.exit(1)
}

const user = process.env.MONGO_USER
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://${user}:${password}@fs-open.rshkgnc.mongodb.net/phonebookApp?appName=FS-Open`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
    name: String, 
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,     
    number
})

person.save().then(result => {
  console.log('Persone saved!')
  return Person.find({})
}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})