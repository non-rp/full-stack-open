const Search = ({search, handleOnChange}) => {
    return (
        <div>
            Find countries: <input onChange={(event) => handleOnChange(event)} value={search}  type="search" name="search" id="" />
        </div>
    )
}

export default Search