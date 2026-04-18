const ResultList = ({countries, showDetails}) => {
    if(!countries.length ) return "Nothing found"
    if(countries.length > 10 ) return "Too many matches, specify another filter"
    return (
        <ul className="countries__list">
            {countries && countries.map(item => {
                return <li key={item.ccn3}>
                    {item.name.common}
                    <button onClick={() => showDetails(item)} className="countries__btn btn">Show</button>
                </li>
            })}
        </ul>
    )
}

export default ResultList
