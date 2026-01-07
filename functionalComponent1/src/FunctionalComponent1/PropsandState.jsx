import { useState } from "react"

export function PropsandState(props){
    const [age, setAge] = useState(0);
    return(
        <>
            <h2>Funny Girl Name is : {props.name}</h2>
            <h3>{props.name}, age is {age}</h3>
            <button onClick={()=>{setAge(age+1)}}>Increasing Age</button>
          
        </>
    )
}