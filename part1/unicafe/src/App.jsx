/* eslint-disable */

import { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>
const Button = ({btnName , feedback}) => <button onClick={feedback}>{btnName}</button>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <center>
            <Header header="Give Feedback" />
            <Button btnName={"Good"} feedback={()=>setGood(good +1 )} />
            <Button btnName={"Neutral"} feedback={()=>setNeutral(neutral +1 )}/>
            <Button btnName={"Bad"} feedback={()=>setBad(bad +1 )}/>
            <Header header="Statistics" />
            <p> Good {good}</p>
            <p> Neutral {neutral}</p>
            <p> Bad {bad}</p>
        </center>
    )
}

export default App