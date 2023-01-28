import Item from "./Item";

const Persons = ({ persons }) => {
    return (
        <ul>
            {persons.map((person, index) => 
                <Item key={index} name={person.name} number={person.number} />)}
        </ul>
    )
}

export default Persons;