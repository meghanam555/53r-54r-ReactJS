// import { EventBinding1 } from "./Components/EventBinding1"
// import { Statemanagement } from "./Components/Statemanagement"

import { Props } from "./Props/Props"

// import CounterApp from "./Components/CounterApp"

// import { EventBinding2 } from "./Components/EventBinding2"



function App() {


  return (
    <>
      {/* <h1>Hiii</h1> */}
      {/* <Statemanagement /> */}
      {/* <EventBinding1 /> */}
      {/* <EventBinding2 /> */}
      {/* <CounterApp /> */}
      <Props eid="1201" ename="Sundra" esalary={25000} edepartment="React Developer" eemail="Sundra@gmail.com" eate={true} eskills={["HTML, CSS, JSON, ReactJS"]}/>
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} eskills={["Python, SQL, FrontEnd, Django"]}   />
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} />
    </>
  )
}

export default App
