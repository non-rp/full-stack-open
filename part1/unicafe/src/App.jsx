import { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const HandleClick = (value, setValue) => {
  setValue(value + 1)
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

      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

export default App
