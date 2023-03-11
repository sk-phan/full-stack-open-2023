import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './PersonForm'
import Error from './components/Error'

import personService from "./service";

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [feedbackMessage, setfeedbackMessage] = useState('')
  const [error, setError] = useState(false);
  const [showFeedback, setshowFeedback] = useState(false);

  useEffect(() => {
    getPersons()
  }, [])
  
  //Get data
  const getPersons = () => {
    personService
    .getAll()
    .then(res => {
      if (res.data) {
     
        setPersons(res.data)
     
      }
    })
    .catch(error => console.log(error))
  }

  //Submit form
  const onSubmit = (e) => {
    
    e.preventDefault();
    
    let validatePerson = persons.find(item => item.name === newName);
    
    if (validatePerson) {
      const updateNumber =  window.confirm(`${newName} is already added to phonebook`)

      if (updateNumber) {

        validatePerson.number = newNumber

        personService
        .update( validatePerson.id, validatePerson )
        .then(res => {
          if (res.data) {

            getPersons()

            setfeedbackMessage(`Updated ${validatePerson.name}'s phone number succesfully`)
           
            setshowFeedback(true)
           
            setTimeout(() => setshowFeedback(false), 3000)
          }
        })
        .catch(error => {
          console.log(error)

          setfeedbackMessage(`Information of ${validatePerson.name} has already removed from the server`)
          
          setError(true)
          
          setshowFeedback(true)
          
          setTimeout(() => {
            
            setshowFeedback(false)
            
            setError(false)
         
          }, 3000)
        })
      }
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      
      personService
      .create(newPerson)
      .then(res => {
        if (res.data) {}
                    
          setPersons([...persons, res.data])

          setfeedbackMessage(`Added ${newPerson.name}`)
          
          setshowFeedback(true)
          
          setTimeout(() => setshowFeedback(false), 3000)
      })
      .catch(error => console.log(error))
      
    }
  }

  //Delete item
  const deleteItem = (id) => {
    const currentItem = persons.find(item => item.id === id)

    const confirm = window.confirm('Delete', currentItem.name)

    if (confirm) {
      personService
      .delete(id)
      .then(res => {
        if (res.status === 204) {
          persons.splice( persons.indexOf(currentItem), 1 )
       
        }
      })
      .catch(error => console.log(error))
    }
  }

  //Filter list
  const filterList = () => {
   
    const list = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
   
    return list
  }

  return (
    <div>
      <h1>Phonebook</h1>
      { showFeedback && <Error message = { feedbackMessage } error= { error } />}
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm 
        onSubmit = { onSubmit } 
        newName = { newName } 
        setNewName = { setNewName } 
        newNumber = { newNumber } 
        setNewNumber = { setNewNumber }
        />
      <h2>Numbers</h2>
      <Persons 
        persons = { filterList() }         
        deleteItem = { deleteItem }
        />
    </div>
  )
}

export default App