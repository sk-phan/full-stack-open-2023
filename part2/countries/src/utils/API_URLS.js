import axios from "axios"
const baseUrl = 'https://restcountries.com/v3.1/'

const getAll = () => {
    return axios.get(`${baseUrl}/all`)
}

const search = (name) => {
    return axios.get(`${baseUrl}/name/${name}`)
}

export default { 
    getAll: getAll, 
    search: search, 
}