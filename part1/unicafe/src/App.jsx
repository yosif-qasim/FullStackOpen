/* eslint-disable */

import { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>
const Button = ({btnName , feedback}) => <button onClick={feedback}>{btnName}</button>

const Stastistics = ({good ,bad ,neutral , total , calcAvg , calcPositive }) => {



    if (good === 0 && bad === 0  && neutral === 0 ){
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

    const total = (good + bad + neutral)

    const calcAvg = () => (good - bad) / (good + bad + neutral)
    const calcPositive = () => ( (good) / (good + bad + neutral) )*100

    return (
        <center>
            <Header header="Give Feedback" />
            <Button btnName={"Good"} feedback={()=>setGood(good +1 )} />
            <Button btnName={"Neutral"} feedback={()=>setNeutral(neutral +1 )}/>
            <Button btnName={"Bad"} feedback={()=>setBad(bad +1 )}/>
            <Header header="Statistics" />

            <Stastistics
                good={good} neutral={neutral} bad={bad}
                total={total}  calcAvg={calcAvg} calcPositive={calcPositive}
            />

        </center>
    )
}

export default App