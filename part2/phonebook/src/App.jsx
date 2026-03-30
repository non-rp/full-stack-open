import { useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'
import Search from './components/Search'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        if(response.status === 200) return response.data
      })
      .then( data => { setPersons(data) })
      .catch(error => console.log(error))

  },[])

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
      <Search handleSearch={handleSearch} />
      <Form values={{newName, newNumber}} handlers={{handleSubmit, handleNameInput, handleNumberInput}} />

      
      {<List items={filtered} />}
    </div>
  )
}

export default App