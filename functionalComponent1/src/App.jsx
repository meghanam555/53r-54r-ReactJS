// import { StateManagement } from "./Components/StateManagement"

import { ConditionalRendering } from "./FunctionalComponent1/ConditionalRendering"
import { ConditionalStyling } from "./FunctionalComponent1/ConditionalStyling"
import { ToggleExample } from "./FunctionalComponent1/ToggleExample"

// import { PropsandState } from "./FunctionalComponent1/PropsandState"

// import { Children } from "react"
// import { ChildrenProps } from "./FunctionalComponent1/ChildrenProps"

// import { Props } from "./FunctionalComponent1/Props"

// import { EventBinding } from "./Components/EventBinding"

// import EventHandling from "./Components/Eventhandling"

function App() {


  return (
    <>
     {/* <StateManagement /> */}
     {/* <EventHandling /> */}
     {/* <EventBinding /> */}
     {/* <Props name = "Bunty" age={99}></Props> */}
     {/* <ChildrenProps >
      <h1>I am a Children Prop, passed from Parent Component</h1>
      <h2>Hello There</h2>
     </ChildrenProps>
     <ChildrenProps >
      <h1>I am a Children Prop, passed from Parent Component</h1>
      <h2>Hi There</h2>
     </ChildrenProps> */}
     {/* <PropsandState name = "Harshitha" ></PropsandState> */}
     {/* <ConditionalRendering isloggedIn = {false}></ConditionalRendering> */}
    {/* <ToggleExample /> */}
    <ConditionalStyling />
    </>
  )
}

export default App
