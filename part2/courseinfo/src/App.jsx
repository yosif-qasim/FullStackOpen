const Course = ({course})=>{
  return(
      <>
        <Header header={course.name} />
        <Content content={course.parts} />
        <Total parts={course.parts} />
      </>
  )
}
const Header = (props) => {
  return ( <h1>{props.header}</h1> )
}

const Content = (props) => {
  return (
      <>
        { props.content.map((part) =>
            <Part key={part.id}
                  name={part.name}
                  number={part.exercises}
            /> )}
      </>
  )
}

const Part = (props) => {
  return(
        <p>
          {props.name} {props.number}
        </p>
  )
}
const Total = (props) => {
  const sum = props.parts.reduce( (sum , parts)=>{return sum + parts.exercises} ,0)
  return (<p> Total of : {sum} exercises</p>)
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
      }
    ]
  }

  return <Course course={course} />
}



export default App




