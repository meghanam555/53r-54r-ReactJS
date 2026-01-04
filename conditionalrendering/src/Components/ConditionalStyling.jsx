import React from "react";
export class ConditionalStyling extends React.Component{
    constructor(){
        super();
        this.state = {
            isloggedIn : true
        }
    }
    render(){
       
       if(this.state.isloggedIn){
        return <h1 style={{color:"red"}}>LoggedIn Successfully</h1>
       }
       else{
        return <h2 style={{color:this.state.isloggedIn ? "blue" : "red"}}>Please Login as a new User!!!!</h2>
       }
    }
}