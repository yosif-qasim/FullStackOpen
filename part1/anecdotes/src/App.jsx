import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

    let largest =votes.indexOf(Math.max(...votes))

    const newSelected = () => setSelected(Math.floor(Math.random() * anecdotes.length))
    const addPoint = () => {
        const newPoints = [...votes]
        newPoints[selected] += 1
        console.log(newPoints)
        console.log(largest)
        return (setVotes(newPoints))
    }

    return (
        <center>
            <h1>Anecdote of the day </h1>
            <h3>{anecdotes[selected]}</h3>
            <h3>Has {votes[selected]} Votes </h3>
            <button onClick={newSelected}>Next</button>
            <button onClick={addPoint}>Vote</button>
            <h1>most voted Anecdote</h1>
            <h3>{anecdotes[largest]}</h3>

        </center>
    )
}

export default App