import { useState } from "react"

const Header = ({ text, tag }) => {
  const Tag = tag
  return <Tag>{text}</Tag>
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
      <Header text={ name } tag="h2" />
      {parts && parts.map((part) => <Part key={part.id} part={part} />)}
      <Total total={total} /> 
    </div>
  )
}

const App = () => {
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header text="Web development curriculum" tag="h1" />
      { courses.map((course) => <Course key={course.id} course={course} />) }
    </div>
    
  )
    
}

export default App