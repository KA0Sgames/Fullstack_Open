const Header = (props) => {
  return (
    <>
      <h1>{props.kurssi}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.nimi} {props.tehtavat}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part nimi={props.part1} tehtavat={props.exercises1} />
      <Part nimi={props.part2} tehtavat={props.exercises2} />
      <Part nimi={props.part3} tehtavat={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header kurssi={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
