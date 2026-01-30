import { useLocation } from "react-router-dom"

export function Location(){
    const location = useLocation()
    return(
        <>
            <h1>Location of the Page : {location.pathname}</h1>
        </>
    )
}