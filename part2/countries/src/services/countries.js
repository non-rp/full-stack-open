import axios from "axios"

const apiBaseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    return axios
        .get(`${apiBaseUrl}/all`)
        .then(response => response.data)
}

const getByName = (name) => {

}

export default {getAll, getByName}