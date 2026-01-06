import { useState } from "react"

export default function EventHandling(){
    const [name, setname] = useState("");
    const handlename = (event)=>{
        setname(event.target.value);
    }
    return(
        <>
        {/* <button onClick={()=>{alert("Hiiii, Hello Everybody")}}>Click Here for Change</button> */}
      
            <input type="text" placeholder="Enter Your name" onChange={handlename}></input>
            <h1>{name}</h1>
        
        </>
    )
}