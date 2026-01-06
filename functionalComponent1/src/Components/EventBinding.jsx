// import { useState } from "react"

export function EventBinding(){
    // const [count, setCount] = useState(0);
    // const decrement = ()=>{
    //     setCount(count-1);
    // }

    const greet = (name)=>alert(`Hello, ${name}`)

    return(
        <>
        {/* <h1>The count : {count}</h1> */}
        {/* <button onClick={()=>setCount(count+1)}>Click Here</button> */}
        {/* <button onClick={decrement}>Decrement</button> */}
      
        <button onClick={()=>{greet("megha")}}>Display</button>
        </>
    )
}