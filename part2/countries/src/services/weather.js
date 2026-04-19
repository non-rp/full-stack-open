import axios from "axios"

const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/'

const getCurrent = (lat, lon) => {
    return axios
        .get(`${apiBaseUrl}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.data)
}

export default { getCurrent }
