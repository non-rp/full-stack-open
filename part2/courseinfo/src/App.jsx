import { useState } from "react"

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Part = ({ part }) => {

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({total}) => {
  return (
    <div>
      <p><b>Number of exercises {total}</b></p>
    </div>
  )
}

const Course = ({ course }) => {
  const {id, name, parts} = course
  const total = parts.reduce((sum, current) => sum + current.exercises, 0 )

  return (
    <div> 
      <Header text={ name } />
      {parts && parts.map((part) => <Part key={part.id} part={part} />)}
      <Total total={total} /> 
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of a component',
        exercises: 24,
        id: 4
      },
    ]
  }

  return <Course course={course} />
}

export default App