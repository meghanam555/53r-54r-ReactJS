import { useNavigate } from "react-router-dom"

export function Navigator(){
    const navigator = useNavigate();
    return(
        <>
        <button onClick={()=>navigator("/")}>Home Page</button>
        <button onClick={()=>navigator(-1)}>Go back Page</button>
        </>
    )
}