import { useState } from 'react'
import {useEffect} from "react";
import axios from "axios";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";


const App = () => {

    const setContats = () => {
        console.log("inside setContact")
        axios
            .get("http://localhost:3002/persons")
            .then( contacts =>{
                console.log(contacts.data)
                // initial = contacts.data
                setPersons(contacts.data)
            })
    }


     useEffect( setContats, [])
    const initial = [
        {name: 'Yosif qassim :)', number: '01016420200', id: 0},
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]

    // let initial = []
    const [persons, setPersons] = useState([])
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
            number : newNumber,
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