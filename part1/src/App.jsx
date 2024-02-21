const Header = (props) => {
  return (
    <div>
      Course name: {props.course}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
    Part of the course {props.part} have {props.exercises} exercises
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Total of exercise in course {props.course} have {props.total} exercises
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total course={course} total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App