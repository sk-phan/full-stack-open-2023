const Country = ({ country }) => {

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
        </div>
    )
}   

export default Country