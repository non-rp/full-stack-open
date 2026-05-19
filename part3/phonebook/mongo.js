import mongoose from 'mongoose'
import 'dotenv/config'

if (!process.argv[2]) {
  console.log('give a password')
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

if(name && process.argv.length === 5) {
    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook!`)
        mongoose.connection.close()
    })      
}

if(process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
            mongoose.connection.close()
        })
    })
}