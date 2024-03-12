import { useState } from 'react'
import {useEffect} from "react";
import Filter from "./components/Filter.jsx";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import server_connection from "./services/server_connection.js";


const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    return (
        <div className="notification" >
            {message}
        </div>
    )
}


const App = () => {
    const setContats = () => {
        console.log("from setContats ")
        server_connection
            .getContacts()
            .then((contacts) => {
                return setPersons(contacts)
            })
    }

    useEffect( setContats, [])

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')
    const [newFilter , setnewFilter] = useState('')
    const [notification , setNotification] = useState(null)

    console.log("PERsons --- " , persons ,  typeof persons)

    const addName = event => setNewName(event.target.value)
    const addNumber = event => setNewNumber(event.target.value)
    const doSearch = event => setnewFilter(event.target.value)




    const addPerson = (event) => {
        event.preventDefault()
        const newObject = {
            name : newName ,
            number : newNumber,
            id : (persons.length +1).toString()
        }
        server_connection
            .addContact(newObject)
            .then( contact => {
                setPersons(persons.concat(contact))
                setNotification(`contact ${contact.name} added `)
                setTimeout(() => {
                    setNotification(null)
                }, 2000)
            } )
        setNewName('')
    }

    const checkInput = (event) => {
        event.preventDefault()
        const personCheck = persons.find((p) => p.name === newName )
        personCheck
            ? replaceContact(personCheck.id)
            : addPerson(event)
    }

    const replaceContact = (id) => {
        const newObject = {
            name : newName ,
            number : newNumber,
            id : (persons.length +1).toString()
        }
        if(window.confirm(`contact with the same name already exists , do you want to replace it ???`)){
            server_connection
                .updateContact(id , newObject)
                .then(()=>{
                    setContats()
                    setContats()
                    setNotification(`contact ${newObject.name} updated `)
                    setTimeout(() => {
                        setNotification(null)
                    }, 2000)
                } )
                .catch(error => {
                    console.log(error.response.data.error)
                })

        }
    }

    const deleteContact = (id)=>{
        if(window.confirm(`delete user with id ${id} ???`)){
            server_connection.deleteContact(id).then( ()=>setContats())
        }
    }

    return (
        <>
            <h2>Phonebook</h2>
            <Notification message={notification}></Notification>
            <br/>
            <Filter value={newFilter} onChange={doSearch}/>
            <PersonForm newName={newName} addName={addName} newNumber={newNumber} addNumber={addNumber} checkInput={checkInput} />
            <h2>Numbers</h2>
            <Persons persons={persons} newFilter={newFilter} deleteContact={deleteContact} />
        </>
    )
}

export default App