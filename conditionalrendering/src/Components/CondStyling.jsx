import './Styling.css'
export function CondStyling(){
    const isloggedIn = false;
    return(
        <div>
            {
                isloggedIn ? <p className = {isloggedIn ? "login" : "logout"}>Successfully LoggedIn</p> : <p>Failed To Login</p>
            }
        </div>
    )
}