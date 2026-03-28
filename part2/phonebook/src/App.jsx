import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const updName = {
      name: newName
    }

    if(persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(updName))
    setNewName('')
  }

  const handleInput = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons && persons.map((person) => <Person key={person.name} name={person.name} /> )}
    </div>
  )
}

export default App