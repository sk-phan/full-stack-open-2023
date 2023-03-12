import axios from "axios"
const baseUrl = 'http://localhost:3001'

const getAll = () => {
    return axios.get(baseUrl + '/persons')
}
  
 const create = newObject => {
    return axios.post(baseUrl + '/persons', newObject)
}
  
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/persons/${id}`, newObject)
}
  
const del = (id) => {
    return axios.delete(`${baseUrl}/persons/${id}`)
}

const service = { getAll, create, update, del}

export default service