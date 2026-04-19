import WeatherInfo from './WeatherInfo'

const CountryItem = ({countries}) => {
    if(countries.length > 1) return "More contries found, specify search"

    const country = countries[0]
    return (
        <div className="countries__item">
            <div className='countries__info'>
                <h2>{country.name.common}</h2>
                <h3>Capital: {country.capital[0]}</h3>
                <h3>Area: {country.area}</h3>

                <h2>Languages</h2>
                <ul>
                    {country.languages 
                    && Object.values(country.languages).map((lang) => <li key={lang}>{lang}</li>)}
                </ul>

                <img src={country.flags.svg} alt="" />
            </div>
            <WeatherInfo lat={country.latlng[0]} lon={country.latlng[1]} />
        </div>
    )
}

export default CountryItem