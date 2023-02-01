import { useEffect, useState } from 'react'
import Countries from './components/Countries';
import Country from './components/Country';
import Form from './components/Form';

import api from "./utils/API_URLS";
import {getWeather} from "./utils/weather_API";

const App = () => {
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [showCountry, setShowCountry] = useState(false)
  const [currentCountry, setCurrentCountry] = useState(null);
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (countries.length === 0) {
      getCountries()
    }
  }, [])
  
  useEffect(() => {
    if (newSearch === '') {
      setResult([])
      setShowCountry(false)
    }
    else searchCountries()
  }, [newSearch])
  
  const getCountries = () => {
    api
    .getAll()
    .then(res => {
        setCountries(res.data)
    })
    .catch(error => console.log(error))
  }

  const searchCountries = () => {
    const res = countries.filter(item => item.name.common.toLowerCase().includes(newSearch))
   
    setResult(res)
  }

  const validateResult = result.length >= 1 && result.length <= 10

  const getWeatherData = (lat, lang) => {
    getWeather(lat, lang)
    .then(res => {
      const list = res.data.list
      console.log(list[list.length - 1])
      setWeather(list[list.length - 1])
    })
    .catch(error => console.log(error))
  }

  const selectCountry = (country) => {
    setShowCountry(true)
    setCurrentCountry(country)
    getWeatherData(country.latlng[0], country.latlng[1])
  }
  return (
    <div>
      <Form
        newSearch={newSearch} 
        setNewSearch = {setNewSearch}
        />
        {
          result.length > 10 && 
          <span> Too many matches, specify another filter </span>
        }
        {
          validateResult && 
          <ul >
            { result.map((item, index) => {
              return (
                  <Countries 
                    key={index} 
                    item={item} 
                    selectCountry={selectCountry}
                    />
                  )   
                }) 
            }
          </ul>
        }
        {
          result.length === 1 && 
          <Country 
            country={result[0]}
            weather={weather} 
             />
        }
        {
          showCountry && 
          <Country 
            country={currentCountry}
            weather={weather} 
           />
        }
    </div>
  );
}

export default App;
