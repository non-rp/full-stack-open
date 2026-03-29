const Search = ({handleSearch}) => {
    return (
        <>
            <h2>Search</h2>
            <div>
                search: <input type="text" onChange={handleSearch} />
            </div>
        </>
    )
}

export default Search