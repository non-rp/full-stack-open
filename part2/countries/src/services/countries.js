import axios from "axios"

const apiBaseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    return axios
        .get(`${apiBaseUrl}/all`)
        .then(response => response.data)
}

const getByName = (name) => {
    return axios
        .get(`${apiBaseUrl}/name/${name}`)
        .then(response => response.data)
}

export default {getAll, getByName}