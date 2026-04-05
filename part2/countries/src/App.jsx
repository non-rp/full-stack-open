import { useState } from 'react'
import Search from './components/Search'

function App() {
  const [search, setSearch] = useState(0)

  return (
    <Search value={search} handleOnChange={setSearch} />
  )
}

export default App
