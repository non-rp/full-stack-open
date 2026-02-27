

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <>
      {parts.map(part => 
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = ({ exercises }) => {
  console.log(exercises)
  const total = exercises.reduce((sum, current) => sum + current.exercises, 0)
  return <p>Number of exercises {total}</p>
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
      <Header course={course} />
      <Content parts={parts} /> 
      <Total exercises={parts} />
    </div>
  )
}

export default App