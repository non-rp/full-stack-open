import mongoose from 'mongoose'

if (process.argv.length < 3) {
  console.log('give password as argument')
  console.log(process.argv)
  process.exit(1)
}

const user = process.argv[2]
const password = process.argv[3]
const name = process.argv[4]
const phone = process.argv[5]
console.log(password)

const url = `mongodb+srv://${user}:${password}@fs-open.rshkgnc.mongodb.net/?appName=FS-Open`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})