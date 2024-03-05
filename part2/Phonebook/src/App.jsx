import { useState } from 'react'
import {useEffect} from "react";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import server_connection from "./services/server_connection.js";



const App = () => {

    const setContats = () => {
        server_connection
            .getContacts()
            .then(contacts => setPersons(contacts) )
    }

     useEffect( setContats, [])

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')
    const [newFilter , setnewFilter] = useState('')

    const addName = event => setNewName(event.target.value)
    const addNumber = event => setNewNumber(event.target.value)
    const doSearch = event => setnewFilter(event.target.value)




    const addPerson = (event) => {
        event.preventDefault()
        console.log("potato")
        const newObject = {
            name : newName ,
            number : newNumber,
            id : (persons.length +1).toString()
        }
        server_connection
            .addContact(newObject)
            .then( contact => setPersons(persons.concat(contact)) )
        setNewName('')
    }

    const checkInput = (event) => {
        event.preventDefault()
        persons.find((p) => p.name === newName )
            ? alert(`${newName} is already added to phonebook`)
            : addPerson(event)
    }

    const deleteContact = (id)=>{
        if(window.confirm(`delete user with id ${id} ???`)){
        server_connection.deleteContact(id).then( ()=>setContats())
        }
    }

    return (
    <>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onChange={doSearch}/>
        <PersonForm newName={newName} addName={addName} newNumber={newNumber} addNumber={addNumber} checkInput={checkInput} />
        <h2>Numbers</h2>
        <Persons persons={persons} newFilter={newFilter} deleteContact={deleteContact} />
    </>
    )
}

export default App