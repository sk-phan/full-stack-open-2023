const Filter = ({ filter, setFilter }) => {

    return (
        <div>
            <span>filter shown with</span>
            <input type='text' value={filter} onChange={e => setFilter(e.target.value)}/>
        </div>
    )
}

export default Filter;