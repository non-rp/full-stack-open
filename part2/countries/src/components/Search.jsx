const Search = ({search, handleOnChange}) => {
    <div>
        Find countries: <input onChange={handleOnChange} value={search}  type="search" name="search" id="" />
    </div>
}

export default Search