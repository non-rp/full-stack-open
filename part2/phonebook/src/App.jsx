import { useState } from 'react'
import Person from './components/Person'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const updName = {
      name: newName,
      number: newNumber
    }

    if(persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(updName))
    setNewName('')
    setNewNumber('')
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    setSearch(value)
  }

  const filtered = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Search</h2>

      <div>
        search: <input type="text" onChange={handleSearch} />
      </div>

      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {<List items={filtered} />}
    </div>
  )
}

export default App