const Header = (props) => {
  return (
    <>
      <h1>{props.kurssi.name}</h1>
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
      <Part kurssi={props.kurssi.parts[0]} />
      <Part kurssi={props.kurssi.parts[1]} />
      <Part kurssi={props.kurssi.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.kurssi.parts[0].exercises + props.kurssi.parts[1].exercises + props.kurssi.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header kurssi={course}/>
      <Content kurssi={course} />
      <Total kurssi={course} />
    </div>
  )
}

export default App
