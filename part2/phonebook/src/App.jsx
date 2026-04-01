import { useState, useEffect } from 'react'
import List from './components/List'
import Search from './components/Search'
import Form from './components/Form'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    personsService
      .getAll()
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

    const existedPerson = persons.find(p => p.name === newName)

    if(existedPerson) {
      const validate = window.confirm(`${newName} is already added to phonebook. Update number?`)

      if(validate) {
        personsService
          .update(existedPerson.id, updName)
          .then(data => setPersons(prev => 
            prev.map(person => {
              return person.id === data.id ? {...person, number: data.number} : person
            })
          ))
      }

      setNewName('')
      setNewNumber('')
      return
    }

    personsService
      .create(updName)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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

  const handleDelete = (id, name) => {
    const validate = window.confirm(`Are you sure you want to delete ${name}`)

    if(!validate) return 

    personsService
      .deleteRow(id)
      .then((data) =>  {
        setPersons(prev => prev.filter(person => person.id != data.id))
      })
  }
  
  const filtered = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Form values={{newName, newNumber}} handlers={{handleSubmit, handleNameInput, handleNumberInput}} />     
      {<List items={filtered} handleDelete={handleDelete} />}
    </div>
  )
}

export default App