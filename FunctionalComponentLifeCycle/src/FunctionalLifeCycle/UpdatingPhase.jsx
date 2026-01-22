import { useEffect, useState } from "react"

export function UpdatingPhase(){
    const [count, setCount] = useState(0);
    //Updating Phase
    useEffect(()=>{
        console.log("Count Updated : ",count)
    }, [count])

    //Unmounting Phase
    useEffect(()=>{
        return ()=>{
            console.log("Unmounting Phase - 3")
        }
    }, [])
    return(
        <>
            <h2>Updating - Phase 2</h2>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}