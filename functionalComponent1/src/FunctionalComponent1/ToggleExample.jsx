import { useState } from "react";
export function ToggleExample(){
    const [loggedIn, setloggedIn] = useState(true);
    return(
        <>
        <h1>{loggedIn ? "Welcome to Page" : "Please Login"}</h1>
        <button onClick={()=>setloggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
        </>
    )
}