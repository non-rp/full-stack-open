import { useEffect, useState } from "react"
import weatherService from '../services/weather'

const WeatherInfo = ({lat, lon}) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        weatherService
            .getCurrent(lat, lon)
            .then(data => { setWeatherData(data)})
            .catch(e => console.error(e))
    }, [lat, lon])

    return(
        <div className="weather-info">
            <h2>Weather in {weatherData?.name} </h2>
            <div className="weather-info__data">
                <div className="weather-info__col">
                    <ul>
                        <li>
                            Temperature : {weatherData?.main?.temp} Celsius
                        </li>
                        <li>
                            Temperature max : {weatherData?.main?.temp_max} Celsius
                        </li>
                        <li>
                            Temperature min: {weatherData?.main?.temp_min} Celsius
                        </li>
                        <li>
                            Humidity : {weatherData?.main?.humidity} %
                        </li>
                        <li>
                            Wind speed : {weatherData?.wind?.speed} m/s
                        </li>
                    </ul>
                </div>
                <div className="weather-info__col">
                    {weatherData?.weather?.[0]?.icon && <img src={`https://openweathermap.org/payload/api/media/file/${weatherData?.weather?.[0].icon}.png`} alt="weather icon" />}

                </div>                
            </div>
        </div>
    )
}

export default WeatherInfo
