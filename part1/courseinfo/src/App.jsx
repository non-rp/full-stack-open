

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
  const total = exercises.reduce((sum, current) => sum + current, 0)
  return <p>Number of exercises {total}</p>
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
      <Header course={course} />
      <Content parts={[part1, part2, part3]} /> 
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

export default App