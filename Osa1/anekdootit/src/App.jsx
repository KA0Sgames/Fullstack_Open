import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const DisplayDailyAnecdote = ({ anecdotes, selected }) => {
  return (
    <p>{anecdotes[selected]}</p>
  )
}

const DisplayVotes = ({ selected, votes }) => {
  return (
    <>
      <p>has {votes[selected]} votes</p>
    </>
  )
}

const DisplayMostPopular = ({ anecdotes, mostVoted }) => {
  return (
    <>
      <p>{anecdotes[mostVoted]}</p>
    </>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const getRndInteger = ({ min, max }) => {
  return (
    Math.floor(Math.random() * (max - min) + min)
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleNextClick = () => {
    setSelected(getRndInteger({min: 0, max: anecdotes.length}))
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]

    newVotes[selected] += 1

    if (newVotes[selected] > Math.max(...votes)) {
      setMostVoted(selected)
    }

    setVotes(newVotes)
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <DisplayDailyAnecdote anecdotes={anecdotes} selected={selected} />
      <DisplayVotes selected={selected} votes={votes} />

      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleNextClick} text='next anecdote' />

      <Header text='Anecdote with most votes' />
      <DisplayMostPopular anecdotes={anecdotes} mostVoted={mostVoted} />
      <DisplayVotes selected={mostVoted} votes={votes} />
    </div>
  )
}

export default App
