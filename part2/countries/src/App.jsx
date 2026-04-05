import { useState, useEffect } from 'react'
import Search from './components/Search'
import countriesService from './services/countries'
import ResultList from './components/ResultList'
import CountryItem from './components/CountryItem'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleOnChange = (event) => {
    const value = event.target.value
    setSearch(value)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(data => setCountries(data))
      .catch(error => console.error(error))
  }, [])

  const filteredCountries  = countries.filter((country) => {
    return country.name?.common?.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className='countries'>
      <Search value={search} handleOnChange={handleOnChange} />
      {filteredCountries.length === 1 ? 
      <CountryItem countries={filteredCountries} /> : 
      <ResultList countries={filteredCountries} /> }
    </div>
  )
}

export default App
