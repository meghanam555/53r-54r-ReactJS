// import { EventBinding1 } from "./Components/EventBinding1"
// import { Statemanagement } from "./Components/Statemanagement"

import { ChildrenProps } from "./Props/ChildrenProps"
import { Props1 } from "./Props/Props1"

// import { Props } from "./Props/Props"

// import CounterApp from "./Components/CounterApp"

// import { EventBinding2 } from "./Components/EventBinding2"



function App() {

  const student = ["53", "Harshitha", "Kadpa", "Maggie"];
  return (
    <>
      {/* <h1>Hiii</h1> */}
      {/* <Statemanagement /> */}
      {/* <EventBinding1 /> */}
      {/* <EventBinding2 /> */}
      {/* <CounterApp /> */}
      {/* <Props eid="1201" ename="Sundra" esalary={25000} edepartment="React Developer" eemail="Sundra@gmail.com" eate={true} eskills={["HTML, CSS, JSON, ReactJS"]}/>
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} eskills={["Python, SQL, FrontEnd, Django"]}   />
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} /> */}
      {/* <ChildrenProps name="Sundri" age={99} place="Chicago" salary="20000" skills={["HTML", "CSS", "JS", "ReactJS", "Python", "PDBC", "Django"]}></ChildrenProps> */}
    {/* <ChildrenProps name="Sundra" age={89} place="Mumbai" salary="19000"><div><h1>Children Props</h1></div></ChildrenProps> */}
    {/* <ChildrenProps name="Sundri" age={99} place="Chicago"><ChildrenProps name="Sundri" age={99} place="Chicago"></ChildrenProps></ChildrenProps> */}
    <Props1 student = {student}/>
    </>
  )
}

export default App
