import Item from "./Item";

const Persons = ({ persons, deleteItem }) => {
    return (
        <ul>
            {persons.map((person, index) => 
                <Item key={index} id={person.id} name={person.name} number={person.number} deleteItem = { deleteItem }                />)}
        </ul>
    )
}

export default Persons;