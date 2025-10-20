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
      <Part kurssi={props.kurssit[0]} />
      <Part kurssi={props.kurssit[1]} />
      <Part kurssi={props.kurssit[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.kurssit[0].exercises + props.kurssit[1].exercises + props.kurssit[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header kurssi={course}/>
      <Content kurssit={parts} />
      <Total kurssit={parts} />
    </div>
  )
}

export default App
