import Header from './Header'

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

export default Course;