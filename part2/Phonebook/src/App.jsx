import { useState } from 'react'

const App = () => {

    const initial = [
        {
            name: 'Yosif qassim :)',
            phone : '01016420200'
        } ]

    const [persons, setPersons] = useState(initial)
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber] = useState('')




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
            phone : newNumber }
        setPersons(persons.concat(newObject))
        setNewName('')
    }
    const addName = (event)=> {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const addNumber = (event)=> {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }



    const Person = persons.map( (person) => { return <li> {person.name} {person.phone}</li> })
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={checkInput}>
                 name: <input value={newName} onChange={addName}/>
                 number: <input  value={newNumber} onChange={addNumber}/>
                <button type="submit">add</button>
            </form>
            <h2>Numbers</h2>
            {Person}
        </>
    )
}

export default App