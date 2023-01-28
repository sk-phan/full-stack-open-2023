import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '982893' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    const validateName = persons.find(item => item.name === newName);
    
    if (validateName) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons([...persons, { name: newName, number: newNumber }])
    }
  }

  const filterList = () => {
    const list = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    return list
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm 
        onSubmit={onSubmit} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        />
      <h2>Numbers</h2>
      <Persons persons={ filterList() }/>
    </div>
  )
}

export default App