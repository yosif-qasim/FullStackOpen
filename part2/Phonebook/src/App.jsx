import { useState } from 'react'
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {

    const initial = [
        {name: 'Yosif qassim :)', phone: '01016420200', id: 0},
        {name: 'Arto Hellas', phone: '040-123456', id: 1},
        {name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }]

    const [persons, setPersons] = useState(initial)
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')
    const [newFilter , setnewFilter] = useState('')

    const addName = event => setNewName(event.target.value)
    const addNumber = event => setNewNumber(event.target.value)
    const doSearch = event => setnewFilter(event.target.value)

    const checkInput = (event) => {
        event.preventDefault()
        persons.find((p) => p.name === newName )
            ? alert(`${newName} is already added to phonebook`)
            : addPerson(event)
    }

    const addPerson = (event) => {
        event.preventDefault()
        console.log("potato")
        const newObject = {
            name : newName ,
            phone : newNumber,
            id : persons.length +1
        }
        setPersons(persons.concat(newObject))
        setNewName('')
    }

    return (
    <>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onChange={doSearch}/>
        <PersonForm newName={newName} addName={addName} newNumber={newNumber} addNumber={addNumber} checkInput={checkInput}/>
        <h2>Numbers</h2>
        <Persons persons={persons} newFilter={newFilter} />
    </>
    )
}

export default App