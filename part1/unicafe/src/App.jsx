/* eslint-disable */

import { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>
const Button = ({btnName , feedback}) => <button onClick={feedback}>{btnName}</button>

const Stastistics = ({good ,bad ,neutral}) => {
    const total = (good + bad + neutral)
    const calcAvg = (good, bad, neutral) => (good - bad) / (good + bad + neutral)
    const calcPositive = (good ,bad ,neutral) => ( (good) / (good + bad + neutral) )*100
    if (good , bad , neutral === 0 ){
        return (
            <p>No Feedback !!! </p>
        )
    }
    return(
        <>
            <p> Good {good}</p>
            <p> Neutral {neutral}</p>
            <p> Bad {bad}</p>
            <p> Total {total}</p>
            <p> Average {calcAvg(good, bad, neutral)}</p>
            <p> Positive percent {calcPositive(good, bad, neutral)}% </p>
        </>
    )
}
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
            <Stastistics good={good} neutral={neutral} bad={bad}/>

        </center>
    )
}

export default App