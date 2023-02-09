
const Country = ({ country, weather }) => {
    

    const languages = Object.values(country.languages)
    
    return (
        <div> 
            <h1> { country.name.common } </h1>
            <span> capital: { country.capital[0] } </span>
            <span> area: { country.area } </span>
            <h2> Languages </h2>
            <ul>
                {languages.map((item, index) => {
                    return (
                        <li key={index}> { item } </li>
                    )
                })}
            </ul>
            <span className="flag"> {country.flag} </span>
            <h2> Weather in {country.capital} </h2>
            { weather &&
             <div> 
                 <p>
                    {weather.weather[0].icon}
                 Tempurature
                 <span> { weather.main.temp } </span>
                 </p>
                 <span> wind { weather.wind.speed } m/s </span>
                <img width='200px' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icon" />
            </div> 
            }
        </div>
    )
}   

export default Country