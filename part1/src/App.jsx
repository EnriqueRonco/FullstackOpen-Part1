const Header = (props) => {
  return (
    <h1>
      Course name: {props.course.name}
    </h1>
  )
}

const Part = (props) => {
  return (
    <div>
      Part of the course {props.part.name} have {props.part.exercises} exercises
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Total of exercise in course {props.course.name} have {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises
    </div>
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App