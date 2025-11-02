import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>No feedback given</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text='Good' value={good} />
        </tr>
        <tr>
          <StatisticLine text='Neutral' value={neutral} />
        </tr>
        <tr>
          <StatisticLine text='Bad' value={bad} />
        </tr>
        <tr>
          <StatisticLine text='All' value={good + neutral + bad} />
        </tr>
        <tr>
          <StatisticLine text='Average' value={(good - bad) / (good + neutral + bad)} />
        </tr>
        <tr>
          <StatisticLine text='Positive' value={(good / (good + neutral + bad) * 100)} />
          <td>%</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
  setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='Give feedback' />

      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />

      <Header text='Statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
