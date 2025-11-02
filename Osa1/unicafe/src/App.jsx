import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const TotalNumberOfFeedback = ({ good, neutral, bad }) => {
  return (
    <StatisticLine text='All' value={good + neutral + bad} />
  )
}

const FeedbackAverage = ({ good, neutral, bad }) => {
  return (
    <StatisticLine text='Average' value={(good - bad) / (good + neutral + bad)} />
  )
}

const PositivePercentage = ({ good, neutral, bad }) => {
  return (
    <>
      <p>Positive {(good / (good + neutral + bad) * 100)} %</p>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <TotalNumberOfFeedback good={good} neutral={neutral} bad={bad} />
      <FeedbackAverage good={good} neutral={neutral} bad={bad} />
      <PositivePercentage good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}


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
