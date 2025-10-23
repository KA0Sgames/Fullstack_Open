import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Statistics = (props) => {
  return (
    <>
      <p>{props.text} {props.number}</p>
    </>
  )
}

const NumberOfFeedback = ({ good, neutral, bad }) => {
  return (
    <>
      <p>All {good + neutral + bad}</p>
    </>
  )
}

const FeedbackAverage = ({ good, neutral, bad }) => {
  return (
    <>
      <p>Average {(good - bad) / (good + neutral + bad)}</p>
    </>
  )
}

const PositivePercentage = ({ good, neutral, bad }) => {
  return (
    <>
      <p>Positive {(good / (good + neutral + bad) * 100)} %</p>
    </>
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
      
      <Statistics text='Good' number={good} />
      <Statistics text='Neutral' number={neutral} />
      <Statistics text='Bad' number={bad} />
      <NumberOfFeedback good={good} neutral={neutral} bad={bad} />
      <FeedbackAverage good={good} neutral={neutral} bad={bad} />
      <PositivePercentage good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
