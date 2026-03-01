import { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const HandleClick = (value, setValue) => setValue(value + 1)

const StatElement = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 :  (good - bad) / total
  const positive = total === 0 ? 0 : good / total * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }
  
  return (
    <table>
      <tbody>
        <StatElement text="good" value={good} />
        <StatElement text="neutral" value={neutral} />
        <StatElement text="bad" value={bad} />
        <StatElement text="all" value={total} />

        <StatElement text="average" value={average.toFixed(1)} />
        <StatElement text="positive" value={positive.toFixed(1) + '%'} />
      </tbody>
    </table >
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="give feedback" />

      <Button onClick={() => HandleClick(good, setGood)} text="good" />
      <Button onClick={() => HandleClick(neutral, setNeutral)} text="neutral" />
      <Button onClick={() => HandleClick(bad, setBad)} text="bad" />

      <Heading text="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
