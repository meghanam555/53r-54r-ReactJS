export function ConditionalRendering({isloggedIn}){
//    if(isloggedIn){
//     return <h1>Welcome to Web Page !!!!</h1>
//    }
//    else{
//     return <h1>Please Login!!!</h1>
//    }
    return(
        <>
        {/* {isloggedIn ? "Welcome to the Web Page" : <h1>Please Login</h1>} */}
        {isloggedIn && <h2><i><b>Welcome to web Page</b></i></h2>}
        </>
    )
}