// import { Link, Route, Routes } from "react-router-dom"
// import { Home } from "./Components/Home"
// import { About } from "./Components/About"
// import { Contact } from "./Components/Contact"

import { Location } from "./DynamicRouting/Location"

import { Navigator } from "./DynamicRouting/Naviagator"

import { Link, Route, Routes } from "react-router-dom"
import { DynamicRouting } from "./DynamicRouting/DynamicRouting"




function App() {
  

  return (
    <>

    {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>

     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
     </Routes> */}
     

      {/* <Link to="/user/1">User 1</Link> | <Link to="/user/2">User 2</Link> | <Link to="/user/3">User 3</Link>
      <Routes>
        <Route path="/user/:id" element={<DynamicRouting />}></Route>
      </Routes>  */}
    

     {/* <Navigator /> */}
     <Location />
    
    </>
  )
}

export default App
