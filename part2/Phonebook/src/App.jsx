import { useState } from 'react'

const App = () => {
    const initial = [ { name: 'Arto Hellas' } ]
    const [persons, setPersons] = useState(initial)
    const [newName, setNewName] = useState('')

    const checkInput = (event) => {
        event.preventDefault()
        persons.find((p) => p.name === newName )
            ? alert(`${newName} is already added to phonebook`)
            : addPerson(event)
    }

    const addPerson = (event) => {
        event.preventDefault()
        console.log("potato")
        const newObject = { name : newName}
        setPersons(persons.concat(newObject))
        setNewName('')
    }
    const addName = (event)=> {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const Person = persons.map( (person) => { return <li>{person.name}</li> })
    // console.log(test)
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={checkInput}>
                <div>
                    name: <input value={newName} onChange={addName}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {Person}
        </>
    )
}

export default App