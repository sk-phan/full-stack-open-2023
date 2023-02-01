const Countries = ({ item, selectCountry }) => {
    return (
        <li>
            {item.name.common}
            <button onClick={() => selectCountry(item)}> show </button>
        </li>
    )
}

export default Countries