const Persons = ({persons , newFilter}) => {

    const Person = persons.map( (person) => { return <li key={person.id}> {person.name} {person.phone}</li> })

    const Search = persons.filter( person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())  })

    const Show = newFilter === ''
        ? Person
        : Search.map( (person)=> <li key={person.id}>{person.name} {person.phone}</li> )


    return(
        <>
            {Show}
        </>
    )
}

export default Persons