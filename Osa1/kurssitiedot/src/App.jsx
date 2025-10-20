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
      <p>{props.kurssi.name} {props.kurssi.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part kurssi={props.part1} />
      <Part kurssi={props.part2} />
      <Part kurssi={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header kurssi={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
