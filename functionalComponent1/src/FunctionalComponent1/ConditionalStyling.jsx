import './Styling.css'
import { useState } from "react"

export function ConditionalStyling(){
    const [highlight, sethighlight] = useState(true);
    return(
        <>
            {/* Inline Styling */}
            {/* <h1 style={{color: highlight? "green" : "red"}}>{highlight ? "Active User" : "InActive User"}</h1> */}

            {/* External Styling */}
            <h1 className={highlight ? "light" : "dark"}>{highlight ? "Active User" : "InActive User"}</h1>
            <button onClick={()=>sethighlight(!highlight)} style={{border: "2px solid white", backgroundColor:"black", color:"white", borderRadius:"10px", fontSize:"20px" ,position:"relative", left:"620px", width:"100px", height:"40px", textAlign:"center"}}>{highlight ? "Good" : "Bad"}</button>
        </>
    )
}