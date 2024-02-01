/* eslint-disable */

import { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>
const Button = ({btnName , feedback}) => <button onClick={feedback}>{btnName}</button>

const StatisticLine = ({statName , statValue}) => {
    return (
        <tr>
            <td>{statName}</td>
            <td>{statValue}</td>
        </tr>
    )
}
const Stastistics = ({good ,bad ,neutral , total , calcAvg , calcPositive }) => {

    if (good === 0 && bad === 0  && neutral === 0 ){
        return (
            <p>No Feedback !!! </p>
        )
    }

    return(
        <table>
            <StatisticLine statName={"Good"} statValue={good} />
            <StatisticLine statName={"Neutral"} statValue={neutral} />
            <StatisticLine statName={"Bad"} statValue={bad} />
            <StatisticLine statName={"Total"} statValue={total} />
            <StatisticLine statName={"Average"} statValue={calcAvg()} />
            <StatisticLine statName={"Positive percent"} statValue={calcPositive()} />

        </table>
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