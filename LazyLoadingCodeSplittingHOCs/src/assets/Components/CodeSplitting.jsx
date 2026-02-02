import { lazy, Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"

export  function CodeSplitting(){
    const Home = lazy(()=>import("./Home"))
    const About = lazy(()=>import("./About"))
    const ContactUs = lazy(()=>import("./ContactUs"))
    return(
        <>
        <nav>
            <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link> | <Link to="/ContactUs">ContactUs Page</Link>
        </nav>
        <Suspense fallback={<h1>Loading the Navigation Pages</h1>}>
        
             <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
        </Suspense>
        </>
    )
}