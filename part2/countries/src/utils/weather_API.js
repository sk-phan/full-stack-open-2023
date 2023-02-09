import axios from "axios"

const API_key = process.env.REACT_APP_API_KEY

export const getWeather = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${API_key}`)
} 

