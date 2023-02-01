import axios from "axios"

const API_key = "4efc415dbf1df503974ec65e3563d721"

export const getWeather = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${API_key}`)
} 

