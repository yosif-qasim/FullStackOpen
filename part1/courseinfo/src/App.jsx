const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}
const Part = (props) => {
  console.log(props)

  return(
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <>
    <Part part={props.content.part[0]}  />
    <Part part={props.content.part[1]}  />
    <Part part={props.content.part[2]}  />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>
        Number of exercises { props.total.part[0].exercises + props.total.part[1].exercises + props.total.part[2].exercises }
       </p>

    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
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
      <Content content={course} />
      <Total total={course} />
    </div>
  )
}



export default App