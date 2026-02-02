// import { LazyLoading } from "./assets/Components/LazyLoading"

// import { CodeSplitting } from "./assets/Components/CodeSplitting"
import ComponentAddingFeatures from "./assets/Components/ComponentAddingFeatures"
import Greeting from "./assets/Components/Greeting"



function App() {
  const EnhancedComponent = ComponentAddingFeatures(Greeting)

  return (
    <>
    {/* <CodeSplitting /> */}
      {/* <LazyLoading /> */}
      <EnhancedComponent name={"Bunty"}/>
    </>
  )
}

export default App
