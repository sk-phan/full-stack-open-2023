
const Form = ({ newSearch, setNewSearch }) => {
    return (
        <div>
            <label htmlFor="search-country">Find countries </label>
            <input type='text' 
                id="search-country"
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value.toLowerCase())}
            />
        </div>
    )
}

export default Form