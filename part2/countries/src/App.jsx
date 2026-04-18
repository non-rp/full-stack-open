import { useState, useEffect } from 'react'
import Search from './components/Search'
import countriesService from './services/countries'
import ResultList from './components/ResultList'
import CountryItem from './components/CountryItem'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleOnChange = (event) => {
    const value = event.target.value
    setSearch(value)
    setSelectedCountry(null)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(data => setCountries(data))
      .catch(error => console.error(error))
  }, [])

  const handleShowDetails = (country) => {
    setSelectedCountry(country)
  }

  const filteredCountries  = countries.filter((country) => {
    return country.name?.common?.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className='countries'>
      <Search value={search} handleOnChange={handleOnChange} />
      {selectedCountry
        ? <CountryItem countries={[selectedCountry]} />
        : filteredCountries.length === 1
          ? <CountryItem countries={filteredCountries} />
          : <ResultList countries={filteredCountries} showDetails={handleShowDetails} />}
    </div>
  )
}

export default App
